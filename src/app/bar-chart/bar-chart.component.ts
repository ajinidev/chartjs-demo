import { Component, OnInit, Input } from '@angular/core';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [];
  public barChartType = 'bar'; // change to 'line' for line chart
  public barChartLegend = true;
  public barChartData = [];
  data: any = null;

  @Input()
  records: any;

  constructor() {}

  ngOnInit(): void {
    this.prepareData();
  }

  prepareData() {
    this.barChartLabels = this.records.headers;
    this.barChartLabels.shift();
    for (let row of this.records.data) {
      let data = row;
      let label = data.shift();
      this.barChartData.push({
        data: data,
        label: label,
      });
    }
  }
}
