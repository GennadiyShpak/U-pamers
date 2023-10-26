import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'chatStartDay',
  standalone: true
})
export class ChatStartDayPipe implements PipeTransform {
  transform(value: string, format: string): string {
    if (!value) return '';

    const datePipe: DatePipe = new DatePipe('en-US');
    const valueDate = new Date(value);
    const today = new Date();

    if (datePipe.transform(valueDate, 'shortDate') === datePipe.transform(today, 'shortDate')) {
      return 'Today';
    } else return <string>datePipe.transform(value, format);
  }
}
