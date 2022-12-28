# Generated by Django 4.1.4 on 2022-12-28 10:38

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('userId', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=20)),
                ('lastName', models.CharField(max_length=20)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('email', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=120)),
                ('title', models.CharField(max_length=100)),
                ('resume', models.FileField(blank=True, upload_to='')),
                ('residence', models.CharField(blank=True, max_length=100)),
                ('DOB', models.DateField(blank=True, default='2022-01-01')),
                ('about', models.TextField(blank=True, max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('jobId', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('jobTitle', models.CharField(max_length=50)),
                ('responsibility', models.TextField(max_length=500)),
                ('qualification', models.TextField(max_length=500)),
                ('preferredQualification', models.TextField(max_length=500)),
                ('jobCategory', models.CharField(max_length=100)),
                ('description', models.TextField(default='no description', max_length=500)),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recommender.user')),
            ],
        ),
    ]