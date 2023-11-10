import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ChatLastMessage } from '../../main.model';
import { SetUserAvatarPipe } from '../../../shared/pipes/set-user-avatar.pipe';

@Component({
  selector: 'epm-chat-list-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SetUserAvatarPipe],
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.scss']
})
export class ChatListItemComponent {
  @Input() chat!: ChatLastMessage;
}
