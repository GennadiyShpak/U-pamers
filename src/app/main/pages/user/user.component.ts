import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { APP_ROUTER_NAME, BUTTON_THEMES } from '../../../app.config';
import { ExpandedUserDetailed } from '../../main.model';
import { MainApiService } from '../../service/main-api.service';
import { ContactComponent } from '../../components/contact/contact.component';
import { ContactHeadComponent } from '../../components/contact-head/contact-head.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { ContactAboutComponent } from '../../components/contact-about/contact-about.component';
import { ContactInterestsComponent } from '../../components/contact-interests/contact-interests.component';
import { ContactNoDetailsComponent } from '../../components/contact-no-details/contact-no-details.component';

@Component({
  selector: 'epm-user',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    ContactHeadComponent,
    EpmButtonComponent,
    ContactAboutComponent,
    ContactInterestsComponent,
    ContactNoDetailsComponent
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export default class UserComponent implements OnInit {
  user: ExpandedUserDetailed = this.router.getCurrentNavigation()?.extras.state as ExpandedUserDetailed;

  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

  constructor(
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private mainApiService: MainApiService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.checkUserData();
  }

  onOpenChat(chat: ExpandedUserDetailed): void {
    this.router.navigateByUrl(`${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Chat}/${chat.userId}`, { state: chat });
  }

  private checkUserData(): void {
    if (!this.user || this.user.about === undefined || this.user.interests === undefined) {
      this.getUserData();
    } else {
      this.setPageTitle();
    }
  }

  private getUserData(): void {
    const userId = this.route.snapshot.params['userId'];

    this.mainApiService
      .getUserData(userId)
      .pipe(
        tap(user => {
          this.user = user;
          this.title.setTitle(`U-PAMERS | ${this.user.name} ${this.user.surname} profile`);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private setPageTitle(): void {
    if (this.user) {
      this.title.setTitle(`U-PAMERS | ${this.user.name} ${this.user.surname} profile`);
    }
  }
}
