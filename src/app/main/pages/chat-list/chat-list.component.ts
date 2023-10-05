import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { APP_ROUTER_NAME } from '../../../app.config';
import { ChatListItemComponent } from '../../components/chat-list-item/chat-list-item.component';
import { ChatLastMessage } from '../../main.model';
import { CHATS } from '../../../../mocks/mock-data';

@Component({
  selector: 'epm-chat-list',
  standalone: true,
  imports: [CommonModule, ChatListItemComponent],
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  public chats: ChatLastMessage[] = CHATS;

  constructor(private router: Router) {}

  onOpenChat(userId: string) {
    if (userId) {
      this.router.navigateByUrl(`${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Chat}/${userId}`);
    }
  }

  trackByUserId(_index: number, chat: ChatLastMessage): string {
    return chat.userId;
  }
}
