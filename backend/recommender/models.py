from django.db import models
import uuid
class User(models.Model):
    userId = models.UUIDField(max_length = 120, default =uuid.uuid4,editable = False ,primary_key = True)
    firstName = models.CharField(max_length = 20)
    lastName = models.CharField(max_length = 20)
    username = models.CharField(max_length = 20, unique = True, blank = False)
    email = models.CharField(max_length = 100, unique = True, blank = False)
    password = models.CharField(max_length = 120, blank = False, null = False)
    title = models.CharField(max_length = 100)
    resume = models.FileField(blank = True)
    residence = models.CharField(max_length = 100, blank = True)
    DOB = models.DateField(blank = True)
    about = models.TextField(max_length = 500, blank = True)
    
class Job(models.Model):
    jobId = models.UUIDField(max_length = 120, default = uuid.uuid4 ,primary_key = True)
    userId = models.ForeignKey(User, on_delete = models.CASCADE, db_column = 'userId', blank = False)
    jobTitle = models.CharField(max_length = 50, blank = False, null = False)
    responsibility = models.TextField(max_length = 500, blank = False, null = False)
    qualification = models.TextField(max_length = 500, blank = False, null = False)
    preferredQualification = models.TextField(max_length = 500)
    jobCategory = models.CharField(max_length = 100)
    salary = models.CharField(max_length = 20)

    