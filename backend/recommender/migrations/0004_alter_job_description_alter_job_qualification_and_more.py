# Generated by Django 4.1.4 on 2022-12-28 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recommender', '0003_alter_job_description_alter_job_qualification_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='description',
            field=models.TextField(default='no description', max_length=10000),
        ),
        migrations.AlterField(
            model_name='job',
            name='qualification',
            field=models.TextField(max_length=10000),
        ),
        migrations.AlterField(
            model_name='job',
            name='responsibility',
            field=models.TextField(max_length=10000),
        ),
    ]