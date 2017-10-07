import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-serverinfo',
  templateUrl: './serverinfo.component.html',
  styleUrls: ['./serverinfo.component.css']
})
export class ServerinfoComponent implements OnInit {
private servername='';
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    this.servername=data;
   }

  ngOnInit() {
  }

public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40,56, 55, 40,50], label: 'CPU'},
    {data: [28, 48, 40, 19, 86, 27, 90,56, 55, 40,50], label: 'MEMORY'},
   
  ];
  public lineChartLabels:Array<any> = ['10 min', '15 min', '20 min', '25 min', '30 min', '35 min', '40 min','45 min','50 min','55 min','60 min'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



}
