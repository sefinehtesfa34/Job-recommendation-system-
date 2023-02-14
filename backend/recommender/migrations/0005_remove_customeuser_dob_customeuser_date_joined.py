# Generated by Django 4.1.4 on 2023-01-29 12:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('recommender', '0004_remove_customeuser_title_customeuser_specialization'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customeuser',
            name='DOB',
        ),
        migrations.AddField(
            model_name='customeuser',
            name='date_joined',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined'),
        ),
    ]