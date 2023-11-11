import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTER_NAME } from '../../../app.config';

@Component({
  selector: 'epm-password-saved',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="success-message__wrapper">
      <h1 class="title">Password saved</h1>
      <h3 class="subtitle">Please use your new password to log in.</h3>
    </div>
    <a class="button-link" [routerLink]="loginLink">Log in</a>
  `,
  styleUrls: ['./password-saved.component.scss']
})
export class PasswordSavedComponent {
  readonly loginLink: string = `/${APP_ROUTER_NAME.Auth}/${APP_ROUTER_NAME.LogIn}`;
}
