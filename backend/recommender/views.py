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
import os 
from time import time 
class UserList(APIView):
    def post(self, request, format = None):
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
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
    
class JobList(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    def get(self, request, format = None):
        queryset = Job.objects.all()
        serializer = JobSerializer(queryset, many = True)
        return Response(serializer.data)
    
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
class RecommenderView(APIView):
    def get_object(self, pk):
        try:
            user = User.objects.get(pk = pk)
            return user 
        except User.DoesNotExist:
            raise ValueError
        
    def get(self, request, pk, format = None):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        resume_text = ''
        pathname = os.getcwd() + serializer.data['resume']
        reader = PdfReader(pathname)
        for page in reader.pages:
            resume_text += page.extract_text()
        preprocessor = Preprocessor(resume_text)
        recommended = Job.objects.filter(jobCategory = preprocessor.category)
        serializer = JobSerializer(recommended, many = True)
        
        return Response(serializer.data)
        
    
    