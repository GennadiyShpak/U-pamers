import { Component, DestroyRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ContactComponent } from '../../components/contact/contact.component';
import { ContactHeadComponent } from '../../components/contact-head/contact-head.component';
import { APP_ROUTER_NAME, BUTTON_THEMES } from '../../../app.config';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { MainApiService } from '../../service/main-api.service';
import { ContactInterestsComponent } from '../../components/contact-interests/contact-interests.component';
import { ContactAboutComponent } from '../../components/contact-about/contact-about.component';
import { ContactNoDetailsComponent } from '../../components/contact-no-details/contact-no-details.component';
import { ExpandedUserDetailed } from '../../main.model';

@Component({
  imports: [
    CommonModule,
    ContactComponent,
    ContactHeadComponent,
    EpmButtonComponent,
    ContactInterestsComponent,
    ContactAboutComponent,
    ContactNoDetailsComponent,
    RouterLink
  ],
  selector: 'epm-profile',
  standalone: true,
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html'
})
export default class ProfileComponent implements OnInit {
  user!: ExpandedUserDetailed;

  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly editProfileLink: string = `/${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.ProfileSettings}`;

  constructor(
    private mainApiService: MainApiService,
    private router: Router,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.getPersonalData();
  }

  onOpenEdit(): void {
    this.router.navigateByUrl(this.editProfileLink);
  }

  private getPersonalData(): void {
    this.mainApiService
      .getExpandedPersonalData()
      .pipe(
        tap(user => {
          this.user = user;
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
