import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Message } from '../../main.model';

@Component({
  selector: 'epm-chat-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './epm-chat-message.component.html',
  styleUrls: ['./epm-chat-message.component.scss']
})
export class EpmChatMessageComponent {
  @Input({ required: true }) message!: Message;
}
