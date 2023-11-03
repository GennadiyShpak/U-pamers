import { Component, OnDestroy, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { APP_ROUTER_NAME } from '../../../app.config';
import { ContactListItemComponent } from '../../components/contact-list-item/contact-list-item.component';
import { ExpandedUserDetailed } from '../../main.model';
import { MainApiService } from '../../service/main-api.service';

@Component({
  selector: 'epm-contact-list',
  standalone: true,
  imports: [CommonModule, ContactListItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {
  userList!: Signal<ExpandedUserDetailed[]>;

  constructor(
    private router: Router,
    private mainApiService: MainApiService
  ) {}

  ngOnInit(): void {
    this.userList = this.mainApiService.userList;
    this.mainApiService.getUsers();
  }

  ngOnDestroy(): void {
    this.mainApiService.clearUserList();
  }

  onOpenUser(userId: string): void {
    this.router.navigateByUrl(`${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Contact}/${userId}`);
  }

  trackByUserId(_index: number, user: ExpandedUserDetailed): string {
    return user.userId;
  }
}
