from rest_framework import serializers
from projects.models import Series, Sheets, Program
import datetime


class JSONSerializerField(serializers.Field):
    """ Serializer for JSONField -- required to make field writable"""
    def to_internal_value(self, data):
        return data

    def to_representation(self, value):
        return value


class SheetSerializer(serializers.ModelSerializer):
    Time_cycle = JSONSerializerField()
    Sensor_1 = JSONSerializerField()
    Sensor_2 = JSONSerializerField()
    Sensor_3 = JSONSerializerField()
    Sensor_4 = JSONSerializerField()
    Sensor_5 = JSONSerializerField()
    Sensor_6 = JSONSerializerField()
    Sensor_7 = JSONSerializerField()
    Sensor_8 = JSONSerializerField()
    Sensor_9 = JSONSerializerField()
    Sensor_10 = JSONSerializerField()

    def to_representation(self, obj):
        representation = super().to_representation(obj)
        representation['text'] = representation['name']

        return representation

    class Meta:
        model = Sheets
        fields = ('id', 'name', 'program', 'series', 'Time_cycle', 'Sensor_1', 'Sensor_2', 'Sensor_3', 'Sensor_4',
                  'Sensor_5', 'Sensor_6', 'Sensor_7', 'Sensor_8', 'Sensor_9', 'Sensor_10')


class ProgramSerializer(serializers.ModelSerializer):
    sheets = JSONSerializerField()
    headers = JSONSerializerField()

    class Meta:
        model = Program
        fields = ('id', 'name', 'sheets', 'headers')

