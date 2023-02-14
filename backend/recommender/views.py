import sqlite3
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer 
from rest_framework import status, generics
from rest_framework import permissions 
from .serializers import SkillSerializer, TalentProfileSerializer
from .serializers import UserSerializer, JobSerializer
from .models import Skill, TalentProfile, CustomeUser, Job 
from .preprocessor import Preprocessor, similarity
from PyPDF2 import PdfReader
from rest_framework.pagination import PageNumberPagination
import numpy as np 
def respond(response):
    data = {"id":response['id'],
            'username':response['username'],
            'email':response['email'],
            'organization':response.get('organization', ''),
            'hiringManagerName':response.get('hiringManagerName', ''),
            'specialization':response.get('specialization', ''),
            'resume':response.get('resume', ''),
            'role':response.get('role', ''),
            'about':response.get('about', '')
            }
    return data 
class UserList(APIView, PageNumberPagination):
    def post(self, request, format = None):    
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            data = map(respond, serializer.data)
            return Response(data)
            
        return Response({"error":serializer.errors, "status":status.HTTP_400_BAD_REQUEST})
    
    def get(self, request, format = None):
        users = CustomeUser.objects.all()[:100]
        users = self.paginate_queryset(users, request, view=self)
        serializer = UserSerializer(users, many = True)
        data = map(respond, serializer.data)
        return self.get_paginated_response(data)

    
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserSerializer 
    queryset = CustomeUser.objects.all()
    # lookup_field = 'id'
class JobList(APIView, PageNumberPagination):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, format = None):
        queryset = Job.objects.all()[:100]
        queryset = self.paginate_queryset(queryset, request, view=self)
        serializer = JobSerializer(queryset, many = True)
        return self.get_paginated_response(serializer.data)
    
    def post(self, request, format = None):
        description = request.data['description']
        preprocessor = Preprocessor(description = description)
        request.data['jobCategory'] = preprocessor.category
        serializer = JobSerializer(data  = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({"error":serializer.errors, "status":status.HTTP_400_BAD_REQUEST})
    
class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class RecommenderView(APIView, PageNumberPagination):
    permission_classes = (permissions.IsAuthenticated,)
    def get_object(self, pk):
        try:
            user = CustomeUser.objects.get(pk = pk)
            return user 
        except CustomeUser.DoesNotExist:
            raise ValueError
        
    def get(self, request, pk, format = None):
        try:
            user = self.get_object(pk)
            resume = user.resume
            reader = PdfReader(resume)
            resume_text = ''
            for page in reader.pages:
                resume_text += page.extract_text()
            preprocessor = Preprocessor(resume_text)
            recommended = Job.objects.filter(jobCategory = preprocessor.category)
            recommended = self.paginate_queryset(recommended, request, view = self)
            serializer = JobSerializer(recommended, many = True)
            hashmap = {index:data for index, data in enumerate(serializer.data)}
            similarity_probability = []
            ordered_list = []
            for index in range(len(hashmap)):
                similarity_probability.append(similarity(resume_text, hashmap[index]["description"]))
            sorted_indeces = np.argsort(similarity_probability)
            for index in sorted_indeces:
                ordered_list.append(hashmap[index])
            return self.get_paginated_response(ordered_list)
        except:
            return Response({"error":"Something went wrong!", "status":status.HTTP_400_BAD_REQUEST})
        
class ProfileView(APIView, PageNumberPagination):
    permission_classes = (permissions.IsAuthenticated, )
    def put(self, request, userId, format = None):
        try:
            user = TalentProfile.objects.get(pk = userId)
            serializer = TalentProfileSerializer(user, data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        except:
            serializer = TalentProfileSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response({"error":serializer.errors, "status":status.HTTP_400_BAD_REQUEST})
        
    def delete(self, request, pk, format = None):
        try:
            user = TalentProfile.objects.get(pk = pk)
            user.delete()
            return self.get_paginated_response({"error":"No content", "status":status.HTTP_204_NO_CONTENT})
        except:
            return self.get_paginated_response({"error":"Bad request", "status":status.HTTP_400_BAD_REQUEST})
        
        
    def get(self, request, pk, format = None):
        try:
            user = TalentProfile.objects.get(pk = pk)
            serializer = TalentProfileSerializer(user)
            return self.get_paginated_response(serializer.data)
        except:
            return self.get_paginated_response({"error":ValueError, "status":status.HTTP_403_FORBIDDEN})
class SkillView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = SkillSerializer
    queryset = Skill.objects.all()
class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = SkillSerializer
    queryset = Skill.objects.all()
class Search(APIView, PageNumberPagination):
    def get(self, request, format = None):
        query = request.GET.get('query', '') 
        print(query)
        connection = sqlite3.Connection('db.sqlite3')
        connect = connection.cursor()
        connect.execute('''SELECT jobId,
                                  user_id,
                                  jobTitle,
                                  responsibility,
                                  qualification,
                                  preferredQualification,
                                  jobCategory,
                                  description,
                                  timestamp
                                FROM recommender_job WHERE jobTitle LIKE ?''', ('%'+query+'%',))
        results = connect.fetchmany(10)
        connection.commit()
        connection.close()
        columns = ["jobId", "userId", "jobTitle", "responsibility", "qualification", "preferredQualification", "jobCategory", "salary", "description", "timestamp"]
        return Response(results)
        