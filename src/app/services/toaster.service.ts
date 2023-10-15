import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { initialToasterConfig, TOASTER_MESSAGES } from '../shared/components/epm-toaster/toaster.config';
import { ToasterMessage } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  // TODO: change isLoggedIn and isProfileFilled with real services
  isLoggedIn: WritableSignal<boolean> = signal(false);
  isProfileFilled: WritableSignal<boolean> = signal(false);

  private isHidden$: WritableSignal<boolean> = signal(true);
  private toasterSettings$: WritableSignal<ToasterMessage> = signal(initialToasterConfig);

  isHidden: Signal<boolean> = computed(this.isHidden$);
  toasterSettings: Signal<ToasterMessage> = computed(this.toasterSettings$);

  openToaster(): void {
    this.isHidden$.set(false);
  }

  closeToaster(): void {
    this.isHidden$.set(true);
  }

  getContactPageToasterSettings(): void {
    if (!this.isLoggedIn()) {
      this.toasterSettings$.set(TOASTER_MESSAGES.notLoggedIn);
    } else if (this.isLoggedIn() && !this.isProfileFilled()) {
      this.toasterSettings$.set(TOASTER_MESSAGES.notFilledProfile);
    }
  }
}
