import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts"
import { fade } from 'src/app/animation/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations:[fade]
})
export class MainPageComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  @ViewChild("chart2") chart2!: ChartComponent;
  @ViewChild("chart2") chart3!: ChartComponent;
  chartOptions: any = {};
  chartOptions2: any = {};
  chartOptions3: any = {};
  constructor() { 
    this.chartOptions3 = {
      series: [42, 39, 35, 29, 26],
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
          opacity: 1
        },
        stroke: {
          width: 1,
          colors: undefined
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            }
          }
        },
        theme: {
          monochrome: {
            //    enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        }
    };
    ////////////////////////
    this.chartOptions2 = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea"
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
     
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
     /* responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              height:100,
            },
            legend: {
              show:false,
            //  position: "bottom"
            }
          }
        }
      ]*/
    }
    //////////////
    this.chartOptions = {
    series: [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    title: {
      text: "My First Angular Chart"
    },
    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    }
  }; }

  ngOnInit(): void {
  }

}
