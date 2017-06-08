import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, enteredString: string): any {
    if (value.length === 0 || enteredString === '') {
      return value;
    }
    let filteredAray = [];
    for (let item of value) {
      // checking the server status
      if (item.status === enteredString || item.name === enteredString) {
        filteredAray.push(item);
      }
    }
    return filteredAray;
  }
}
