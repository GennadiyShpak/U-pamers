import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { APP_ROUTER_NAME } from '../../../app.config';
import { ChatListItemComponent } from '../../components/chat-list-item/chat-list-item.component';
import { ChatLastMessage } from '../../main.model';
import { CHATS_MOCK } from '../../../../mocks/mock-data';

@Component({
  selector: 'epm-chat-list',
  standalone: true,
  imports: [CommonModule, ChatListItemComponent],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  chats: ChatLastMessage[] = CHATS_MOCK; // Mock data

  constructor(private router: Router) {}

  onOpenChat(chat: ChatLastMessage) {
    this.router.navigateByUrl(`${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Chat}/${chat.userId}`, { state: chat });
  }

  trackByUserId(_index: number, chat: ChatLastMessage): string {
    return chat.userId;
  }
}
