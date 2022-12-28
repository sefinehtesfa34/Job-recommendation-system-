from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status, generics
from rest_framework import permissions 
from .serializers import LoginSerializer
from django.contrib.auth import login
from .serializers import UserSerializer, JobSerializer
from .models import User, Job 
from .preprocessor import Preprocessor
from PyPDF2 import PdfReader
from rest_framework.pagination import PageNumberPagination
class UserList(APIView, PageNumberPagination):
    def post(self, request, format = None):
        request.data['password'] = request.data['password'].__hash__()
        serializer = UserSerializer(data = request.data)
        # article=Article.objects.all()
        # result=self.paginate_queryset(article,request,view=self)
        # serializer=ArticleSerializer(result,many=True)    
        # return self.get_paginated_response(serializer.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, format = None):
        users = User.objects.all()[:100]
        users = self.paginate_queryset(users, request, view=self)
        
        serializer = UserSerializer(users, many = True)
        users = []
        for user in serializer.data:
            users.append({
            'title':user['title'],
            'firstName':user['firstName'],
            "lastName":user['lastName'],
            "email":user['email'],
            'username':user['username'],
            'residence':user.get('residence', 'Ethiopia'),
            'about':user.get('about', 'Not described till now')
        })
        return self.get_paginated_response(users)
    
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    serializer_class = UserSerializer 
    queryset = User.objects.all()
    lookup_field = 'userId'
class Login(APIView):
    def post(self, request, format = None):
        serializer = LoginSerializer(data = self.request.data, context = {'request':self.request})
        serializer.is_valid(raise_exception = True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response("user is authenticated", status = status.HTTP_202_ACCEPTED)    
class JobList(APIView, PageNumberPagination):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
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
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer
class RecommenderView(APIView, PageNumberPagination):
    def get_object(self, pk):
        try:
            user = User.objects.get(pk = pk)
            return user 
        except User.DoesNotExist:
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
            return self.get_paginated_response(serializer.data)
        except:
            return self.get_paginated_response({"response":"Forbidden"}, status = status.HTTP_403_FORBIDDEN)