# Generated by Django 4.2.2 on 2023-08-03 07:38

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='members',
        ),
        migrations.AddField(
            model_name='team',
            name='members',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
