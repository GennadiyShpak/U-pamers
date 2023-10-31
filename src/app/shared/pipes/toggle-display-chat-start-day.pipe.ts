import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../../main/main.model';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'toggleDisplayChatStartDay',
  standalone: true
})
export class ToggleDisplayChatStartDayPipe implements PipeTransform {
  transform(message: Message, messages: Message[], i: number): boolean {
    const datePipe: DatePipe = new DatePipe('en-US');
    const previousMessage: Message | undefined = messages[i + 1];

    return previousMessage
      ? datePipe.transform(message.time, 'shortDate') !== datePipe.transform(previousMessage.time, 'shortDate')
      : true;
  }
}
