import { Injectable } from '@angular/core';
import { CSVRecord } from './csvrecord';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  constructor() {}

  csvJSON(csv) {
    var lines = csv.split('\n');

    var result = [];
    let headers = [];
    for(let header of lines[0].split(',')){
      headers.push(header.trim());
    }

    for (var i = 1; i < lines.length; i++) {
      var obj = [];
      var currentline = lines[i].split(',');

      for (var j = 0; j < headers.length; j++) {
        obj.push(currentline[j]);
      }

      result.push(obj);
    }
    // return JSON.stringify(result);
    return {
      headers: headers,
      data: result
    };
  }


  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }
}
