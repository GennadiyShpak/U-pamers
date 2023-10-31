import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../../main/main.model';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'toggleDisplayMessageTime',
  standalone: true
})
export class ToggleDisplayMessageTimePipe implements PipeTransform {
  transform(message: Message, messages: Message[], i: number): boolean {
    const datePipe: DatePipe = new DatePipe('en-US');
    const nextMessage = messages[i - 1];

    if (!nextMessage) return false;

    return datePipe.transform(message.time, 'shortDate') === datePipe.transform(nextMessage.time, 'shortDate')
      ? message.sender === nextMessage.sender
      : false;
  }
}
