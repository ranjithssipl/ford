import json
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.decorators import action
from .models import Sheets, Series, Program
from .serializers import SheetSerializer, ProgramSerializer

# Create your views here.


class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)

    @action(methods=['get'], detail=False, url_path='status')
    def get_status(self, request):
        return Response({"status": "Online"})

    @action(methods=['get'], detail=False, url_path='getAllSeries')
    def get_series(self, request):
        qs = Series.objects.all()
        data = []
        for series in qs:
            data.append({'id': series.id, 'text': series.name})

        return Response({"series": data})

    @action(methods=['get'], detail=True, url_path='getAllPrograms')
    def get_programs(self, request, pk):
        qs = Sheets.objects.filter(series_id=pk)
        program_qs = Program.objects.all()
        data = []
        for sheets in qs:
            for program in program_qs:
                index = next((index for (index, d) in enumerate(data) if d["id"] == program.id), None)
                if sheets.id in program.sheets and index == None:
                    data.append({'id': program.id, 'text': program.name})

        return Response({"data": data})

    @action(methods=['get'], detail=True, url_path='getAllSheets')
    def get_sheets(self, request, pk):
        qs = Program.objects.get(id=pk)
        sheets = Sheets.objects.filter(id__in=qs.sheets)

        data = SheetSerializer(sheets, context={'request': request}, many=True). data

        return Response({"data": data})

    @action(methods=['get'], detail=True, url_path='getAllHeaders')
    def get_headers(self, request, pk):
        qs = Program.objects.get(id=pk)

        return Response({"data": qs.headers})

    @action(methods=['post'], detail=False, url_path='getTimeSeries')
    def get_time_series(self, request):
        data = request.data
        sheets_qs = Sheets.objects.filter(id__in=data['sheets'])
        time_series = []
        time_series_list = []
        for sheets in sheets_qs:
            for index, time in enumerate(sheets.Time_cycle):
                time_series_list.append(time)
                sensor = []
                for headers in data['headers']:
                    value = sheets.__getattribute__(headers)
                    if value[index] == '':
                        value[index] = 0
                    print(value)
                    sensor.append(float(value[index]))
                index = next((index for (index, d) in enumerate(time_series) if d["TIME"] == time), None)
                if not index:
                    obj = {
                        "TIME": time,
                        "SENSOR_DATA": sensor
                    }
                    time_series.append(obj)
                else:
                    time_series[index]['SENSOR_DATA'] += sensor

        return Response({"data": time_series, 'times': time_series_list})

    @action(methods=['post'], detail=False, url_path='signalTransform')
    def get_signal(self, request):
        data = request.data
        import numpy as np
        from scipy.fft import fft, ifft
        signal = []
        for time in data['time_series']:
            x = np.array(time['data'])
            y = fft(x)
            value = []
            for data in y:
                value.append(data.__float__())

            signal.append({
                'name': time['name'],
                'data': value
            })

        return Response({"data": signal})

