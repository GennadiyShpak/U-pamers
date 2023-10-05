import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatLastMessage } from '../../main.model';

@Component({
  selector: 'epm-chat-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.scss']
})
export class ChatListItemComponent {
  @Input() chat!: ChatLastMessage;
}