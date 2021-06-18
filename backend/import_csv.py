from csv import reader
import os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ford.settings")
django.setup()
from projects.models import Program, Series, Sheets


with open('testdata_C1.csv', 'r') as read_obj:
    # pass the file object to reader() to get the reader object
    csv_reader = reader(read_obj)
    # Pass reader object to list() to get a list of lists
    list_of_rows = list(csv_reader)
    headers = list_of_rows[0]
    list_of_rows.pop(0)

    Time_cycle = []
    Sensor_1 = []
    Sensor_2 = []
    Sensor_3 = []
    Sensor_4 = []
    Sensor_5 = []
    Sensor_6 = []
    Sensor_7 = []
    Sensor_8 = []
    Sensor_9 = []
    Sensor_10 = []
    for lists in list_of_rows:
        Time_cycle.append(lists[0])
        Sensor_1.append(lists[1])
        Sensor_2.append(lists[2])
        Sensor_3.append(lists[3])
        Sensor_4.append(lists[4])
        Sensor_5.append(lists[5])
        Sensor_6.append(lists[6])
        Sensor_7.append(lists[7])
        Sensor_8.append(lists[8])
        Sensor_9.append(lists[9])
        Sensor_10.append(lists[10])

    sheets = Sheets()
    sheets.name = "testdata_C1.csv"
    sheets.program = "program 1"
    sheets.series_id = 2
    sheets.Time_cycle = Time_cycle
    sheets.Sensor_1 = Sensor_1
    sheets.Sensor_2 = Sensor_2
    sheets.Sensor_3 = Sensor_3
    sheets.Sensor_4 = Sensor_4
    sheets.Sensor_5 = Sensor_5
    sheets.Sensor_6 = Sensor_6
    sheets.Sensor_7 = Sensor_7
    sheets.Sensor_8 = Sensor_8
    sheets.Sensor_9 = Sensor_9
    sheets.Sensor_10 = Sensor_10
    sheets.save()



