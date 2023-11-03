import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';

import { APP_ROUTER_NAME } from '../app.config';
import { ImageCroppedEvent } from 'ngx-image-cropper';

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

  onCreateAccountClick(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }
}
