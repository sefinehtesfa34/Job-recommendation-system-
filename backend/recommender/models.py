import time
from django.db import models
import uuid
from datetime import date 
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from jobRecommender import settings
class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(('Email is required!'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.is_active = True 
        user.save(using = self._db)
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        if extra_fields.get('is_staff') is not True:
            return ValueError(('Staff must have is_staff=True'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)
    
class CustomeUser(AbstractUser):
    date_joined  = None
    email = models.EmailField(max_length = 100, unique = True)
    first_name = models.CharField(max_length = 20, blank=True)
    last_name = models.CharField(max_length = 20, blank = True)
    organization = models.CharField(max_length = 120, blank = True)
    careerSite = models.CharField(max_length = 120, blank = True)
    hiringManagerName = models.CharField(max_length = 120, blank = True)
    password = models.CharField(max_length = 120, blank = False, null = False)
    title = models.CharField(max_length = 100, blank=True)
    resume = models.FileField(blank=True)
    residence = models.CharField(max_length = 100, blank = True)
    DOB = models.DateField(blank = True, default= date.today())
    about = models.TextField(max_length = 1000, blank = True)
    timestamp = models.DateField(default= date.today())
    USERNAME_FIELD ='email'
    REQUIRED_FIELDS = ['password']
    objects = UserManager()
    def __str__(self):
        return self.email
    
class Job(models.Model):
    jobId = models.UUIDField(max_length = 120, default = uuid.uuid4 ,primary_key = True)
    userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE)
    jobTitle = models.CharField(max_length = 50, null = False)
    responsibility = models.TextField(max_length = 10000,  null = False)
    qualification = models.TextField(max_length = 10000, null = False)
    preferredQualification = models.TextField(max_length = 500)
    jobCategory = models.CharField(max_length = 100)
    salary = models.CharField(max_length = 20),
    description = models.TextField(max_length = 10000, default = 'no description')
    timestamp = models.DateField(default= date.today())
    
class Skill(models.Model):
    skillId = models.UUIDField(max_length = 120, default = uuid.uuid4 ,primary_key = True)
    name = models.CharField(max_length = 100, blank = True)

class TalentProfile(models.Model):
    userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    education = models.CharField(max_length = 120, blank = True)
    linkedin = models.CharField(max_length = 120, blank = True)
    certification = models.CharField(max_length= 1000, blank=True)
    skill = models.ForeignKey('Skill',on_delete=models.CASCADE)
    timestamp = models.DateField(default= date.today())

    