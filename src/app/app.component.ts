import { Component, ViewChild } from '@angular/core';
import { ChartDataService } from './chart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'chartjs-demo';
  public records: any;
  @ViewChild('csvReader') csvReader: any;

  constructor(private dataService: ChartDataService) {}

  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;

    if (this.dataService.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        this.records = this.dataService.csvJSON(reader.result);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.records = [];
    }
  }
}
