from __future__ import unicode_literals
from jsonfield import JSONField
from django.db import models
from django.conf import settings

# Create your models here.


class Series(models.Model):
    name = models.CharField(max_length=100, null=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)


class Sheets(models.Model):
    series = models.ForeignKey(Series, related_name='series', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    program = models.CharField(max_length=100)
    Time_cycle = JSONField(null=True)
    Sensor_1 = JSONField(null=True)
    Sensor_2 = JSONField(null=True)
    Sensor_3 = JSONField(null=True)
    Sensor_4 = JSONField(null=True)
    Sensor_5 = JSONField(null=True)
    Sensor_6 = JSONField(null=True)
    Sensor_7 = JSONField(null=True)
    Sensor_8 = JSONField(null=True)
    Sensor_9 = JSONField(null=True)
    Sensor_10 = JSONField(null=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)


class Program(models.Model):
    name = models.CharField(max_length=100)
    sheets = JSONField(null=True)
    headers = JSONField(null=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
