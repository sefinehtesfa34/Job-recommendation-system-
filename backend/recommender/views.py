from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status, generics
from rest_framework import permissions 
from .serializers import LoginSerializer
from django.contrib.auth import login
from .serializers import UserSerializer, JobSerializer
from .models import User, Job 

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserSerializer 
    queryset = User.objects.all()
    lookup_field = 'pk'

class Login(APIView):
    def post(self, request, format = None):
        permission_classes = (permissions.AllowAny,)
        serializer = LoginSerializer(data = self.request.data, context = {'request':self.request})
        serializer.is_valid(raise_exception = True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response("user is authenticated", status = status.HTTP_202_ACCEPTED)
    
class JobList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    
class JobDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    
    