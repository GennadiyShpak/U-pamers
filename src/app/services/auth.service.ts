import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';

import { APP_ROUTER_NAME } from '../app.config';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserAuthData, UserAuthFormData } from '../auth/auth.model';
import { DRAFT_FORM_INITIAL_VALUE } from '../auth/auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly imageChangedEvent$: WritableSignal<Event> = signal({} as Event);
  private readonly croppedImage$: WritableSignal<ImageCroppedEvent> = signal({} as ImageCroppedEvent);
  private readonly userAvatarDraft$: WritableSignal<SafeUrl> = signal('');
  private readonly fileEventDraft$: WritableSignal<Event> = signal({} as Event);

  readonly imageChangedEvent: Signal<Event> = this.imageChangedEvent$.asReadonly();
  readonly croppedImage: Signal<ImageCroppedEvent> = this.croppedImage$.asReadonly();
  readonly userAvatarDraft: Signal<SafeUrl> = this.userAvatarDraft$.asReadonly();
  readonly fileEventDraft: Signal<Event> = this.fileEventDraft$.asReadonly();
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;

  private draftAuthForm: UserAuthData = structuredClone(DRAFT_FORM_INITIAL_VALUE);

  constructor(private router: Router) {}

  setImageChangeEvent(event: Event): void {
    this.imageChangedEvent$.set(event);
  }

  setFileEventDraft(event: Event): void {
    this.fileEventDraft$.set(event);
  }

  setCroppedImage(event: ImageCroppedEvent): void {
    this.croppedImage$.set(event);
  }

  setUserAvatarDraft(event: SafeUrl): void {
    this.userAvatarDraft$.set(event);
  }

  saveFormValue(formValue: UserAuthFormData): void {
    delete (formValue as Partial<UserAuthFormData>).repeatPassword;
    this.draftAuthForm = { ...this.draftAuthForm, ...this.filterFormValue(formValue) };
  }

  getDraftFormValue(): UserAuthData {
    return this.draftAuthForm;
  }

  resetDraftFormValue(): void {
    this.draftAuthForm = structuredClone(DRAFT_FORM_INITIAL_VALUE);
  }

  private filterFormValue<T extends object>(formValue: T): T {
    Object.entries(formValue).forEach(([key, value]) => {
      if (!value) {
        delete formValue[key as keyof T];
      }

      if (typeof value === 'object' && Object.entries(value).length) {
        formValue[key as keyof T] = this.filterFormValue(value);
      }

      if (typeof value === 'object' && !Object.entries(value).length) {
        delete formValue[key as keyof T];
      }
    });

    return formValue;
  }
}
