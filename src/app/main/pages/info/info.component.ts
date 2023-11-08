import { AfterViewInit, ChangeDetectorRef, Component, DestroyRef, HostListener, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmChipsListComponent } from '../../../shared/components/epm-chips-list/epm-chips-list.component';
import { MainApiService } from '../../service/main-api.service';
import { ProfileDetailsForm, SocialMedias, UserDetailed } from '../../main.model';
import { BUTTON_THEMES, SOCIAL_ICONS, SOCIAL_PLACEHOLDERS_CONFIG } from '../../../app.config';

@Component({
  selector: 'epm-info',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    EpmButtonComponent,
    EpmInputComponent,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EpmChipsListComponent,
    NgOptimizedImage
  ],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export default class InfoComponent implements OnInit, AfterViewInit {
  @HostListener('window:scroll') onScroll(): void {
    this.isBottomReached = this.checkIsBottomReached();

    if (this.isBottomReached) {
      this.buttonClasses = [this.buttonThemes.Primary];
    } else {
      this.buttonClasses = [this.buttonThemes.Primary, this.buttonThemes.Small];
    }
  }

  user!: UserDetailed;
  datePickerStartDate!: Date;
  profileDetailsForm!: FormGroup<ProfileDetailsForm>;
  buttonClasses!: BUTTON_THEMES[];
  isBottomReached!: boolean;

  private interetsFormData: string[] = [];

  readonly socialIcons: typeof SOCIAL_ICONS = SOCIAL_ICONS;
  readonly socialPlaceholders: typeof SOCIAL_PLACEHOLDERS_CONFIG = SOCIAL_PLACEHOLDERS_CONFIG;
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

  get socialControls(): FormGroup<SocialMedias> {
    return this.profileDetailsForm.controls.socials;
  }

  constructor(
    private mainApiService: MainApiService,
    private destroyRef: DestroyRef,
    private fb: NonNullableFormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.datePickerStartDate = new Date(this.user.birthDate);
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.onScroll();
    this.cd.detectChanges();
  }

  private getUserData(): void {
    this.mainApiService
      .getPersonalData()
      .pipe(
        tap(user => {
          this.user = user;
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private initForm(): void {
    this.profileDetailsForm = this.fb.group({
      birthDate: [''],
      location: [''],
      about: [''],
      socials: this.fb.group({
        instagram: [''],
        linkedin: [''],
        facebook: [''],
        skype: [''],
        telegram: ['']
      })
    });
  }

  onInterestsChange(interests: string[]): void {
    this.interetsFormData = interests;
  }

  private checkIsBottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 25;
  }
}
