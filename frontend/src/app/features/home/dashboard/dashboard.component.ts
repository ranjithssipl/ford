import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Toast, ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { SeriesService } from '@app/services';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  seriesForm: FormGroup;
  series = [];
  program = [];
  sheets = [];
  headers = [];
  time_series = [];
  selected_sheets = [];
  selected_headers = [];
  selected_time = [];
  time_series_data;
  signalChart: Chart;
  selectedProgram;
  chartData;

  constructor(
    private _formBuilder: FormBuilder,
    private seriesService: SeriesService
  ) { 
    this.seriesForm = this._formBuilder.group(
      {
          'series': [[], Validators.required],
          'program': [[], Validators.required],
          'sheets': [[], Validators.required],
          'headers': [[], Validators.required],
          'time_series': [[], Validators.required]
      }
  );
  }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(){
    this.seriesService.getSeries().subscribe(
      (resp) => {
         this.series = resp['series'];
      }
  );
  }

  seriesChange(event){
    this.selected_time = [];
    this.selected_headers = [];
    this.selected_sheets = [];
    this.time_series = [];
    this.time_series_data = [];
    this.program = [];
    this.seriesForm.controls['program'].reset();
    this.seriesForm.controls['sheets'].reset();
    this.seriesForm.controls['headers'].reset();
    this.seriesForm.controls['time_series'].reset();
    this.seriesForm.updateValueAndValidity();
    this.seriesService.getProgram(event.id).subscribe(resp => {
      this.program = resp['data'];
    })
  }

  programChange(event){
    this.selected_time = [];
    this.selected_headers = [];
    this.selected_sheets = [];
    this.time_series = [];
    this.seriesForm.controls['sheets'].reset();
    this.seriesForm.controls['headers'].reset();
    this.seriesForm.controls['time_series'].reset();
    this.seriesForm.updateValueAndValidity();

    this.selectedProgram = event.id;
    this.seriesService.getSheets(event.id).subscribe(resp => {
      this.sheets = resp['data'];
      // for(let i of this.sheets_data){
      //   this.sheets.push({
      //     "id": i.id,
      //     "text": i.name
      //   });
      // }
    })
  }

  sheetsChange(event, type){
    // this.selected_sheets = [];
    if(type == 'selected'){
      if(this.selected_sheets.indexOf(event.id) == -1){
        this.selected_sheets.push(event['id']);
      }
    }
    else{
this.selected_sheets.splice(this.selected_headers.indexOf(event.id))
    }
    
    console.log(this.selected_sheets)
    this.seriesService.getHeaders(this.selectedProgram).subscribe(resp => {
      this.headers = resp['data'];
    })
    this.renderChart();
  }

  headerChange(event, type){
    if(type == 'selected'){
      if(this.selected_headers.indexOf(event.id) == -1){
        this.selected_headers.push(event['id']);
      }
    }
    else{
this.selected_headers.splice(this.selected_headers.indexOf(event.id))
    }
    
    let data = {
      "sheets": this.selected_sheets,
      "headers": this.selected_headers
    }
    this.seriesService.getTimeSeries(data).subscribe(resp => {
      this.time_series_data = resp['data'];
      this.time_series  = resp['times'];
    })
    this.renderChart();
  }

  timeChange(event, type){
    let chartData = [];
    if(type == 'selected'){
      if(this.selected_time.indexOf(event.id) == -1){
        this.selected_time.push(event['id']);
      }
    }
    else{
this.selected_time.splice(this.selected_time.indexOf(event.id))
    }
    this.renderChart();
  }

  renderChart(){
    this.chartData = [];
    for(let i of this.selected_time){
      for(let j of this.time_series_data){
        if(i == j['TIME'])
        this.chartData.push({
          name: i,
          data: j['SENSOR_DATA']
        })
      }
    }

    this.generateSignalChart(this.chartData);
  }


  generateSignalChart(chartData) {
    console.log(chartData)
    let x_value = '';
    let answer_labels = chartData['answer_set'];
    this.signalChart = new Chart({
      chart: {
          type: 'spline',
      },
      title: {
          text: 'Time Series'
      },
      credits: {
          enabled: false
      },
      xAxis: {
      },
      yAxis: {
          allowDecimals: true,
          title: {
              text: 'Sensor'
          },
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: chartData
  })

}
public onSelectAll() {
  const selected = this.time_series.map(item => item);
  this.seriesForm.get('time_series').patchValue(selected);
  this.selected_time = this.time_series;
  this.renderChart();
}

public onClearAll() {
  this.seriesForm.get('time_series').patchValue([]);
  this.selected_time = [];
  this.renderChart();
}

submitForm(value){
  let data = {
    "time_series": this.chartData,
  }
  this.seriesService.getSignal(data).subscribe(resp => {
    this.generateSignalChart(resp['data']);
  })
}


}
