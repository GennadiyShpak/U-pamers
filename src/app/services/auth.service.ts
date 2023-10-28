import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';

import { APP_ROUTER_NAME } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly imageChangedEvent$: WritableSignal<Event> = signal({} as Event);
  private readonly croppedImage$: WritableSignal<SafeUrl> = signal('');
  private readonly userAvatarDraft$: WritableSignal<SafeUrl> = signal('');
  private readonly fileEventDraft$: WritableSignal<Event> = signal({} as Event);

  readonly imageChangedEvent: Signal<Event> = this.imageChangedEvent$.asReadonly();
  readonly croppedImage: Signal<SafeUrl> = this.croppedImage$.asReadonly();
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

  setCroppedImage(event: SafeUrl): void {
    this.croppedImage$.set(event);
  }

  setUserAvatarDraft(event: SafeUrl): void {
    this.userAvatarDraft$.set(event);
  }

  onCreateAccountClick(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }
}
