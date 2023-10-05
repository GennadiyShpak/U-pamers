import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { USERS } from '../../../../mocks/mock-data';
import { APP_ROUTER_NAME } from '../../../app.config';
import { ChatListItemComponent } from '../../components/chat-list-item/chat-list-item.component';
import { ContactListItemComponent } from '../../components/contact-list-item/contact-list-item.component';
import { UserDetailed } from '../../main.model';

@Component({
  selector: 'epm-contact-list',
  standalone: true,
  imports: [CommonModule, ChatListItemComponent, ContactListItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  public users: UserDetailed[] = USERS;

  constructor(private router: Router) {}

  onOpenUser(userId: string) {
    if (userId) {
      this.router.navigateByUrl(`${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Contact}/${userId}`);
    }
  }

  trackByUserId(_index: number, user: UserDetailed): string {
    return user.userId;
  }
}
