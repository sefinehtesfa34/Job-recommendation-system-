from .models import User, Job 
from rest_framework import serializers 
from django.contrib.auth import authenticate
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = '__all__'
class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job 
        fields = '__all__'
        
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(
        label = 'Username',
        write_only = True
    )
    password = serializers.CharField(
        label = 'Password',
        style = {'input_type':'password'},
        trim_whitespace = False, 
        write_only = True,
    )
    def validate(self, attrs):
        username = attrs['username']
        password = attrs['password']
        if username and password:
            user = authenticate(request=self.context.get('request'), username = username, password = password)
            if not user:
                message = 'Access denied: wrong username or password'
                raise serializers.ValidationError(message, code = 'autherization')
        else:
            message = 'Both username and password is required'
            raise serializers.ValidationError(message, code = 'autherization')
        attrs['user'] = user 
        return attrs 
    
    