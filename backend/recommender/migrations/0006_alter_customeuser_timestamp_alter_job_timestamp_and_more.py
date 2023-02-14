# Generated by Django 4.1.4 on 2023-02-14 13:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recommender', '0005_remove_customeuser_dob_customeuser_date_joined'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeuser',
            name='timestamp',
            field=models.DateField(default=datetime.date(2023, 2, 14)),
        ),
        migrations.AlterField(
            model_name='job',
            name='timestamp',
            field=models.DateField(default=datetime.date(2023, 2, 14)),
        ),
        migrations.AlterField(
            model_name='talentprofile',
            name='timestamp',
            field=models.DateField(default=datetime.date(2023, 2, 14)),
        ),
    ]
