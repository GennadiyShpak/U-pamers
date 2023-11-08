import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTER_NAME } from '../../../app.config';

@Component({
  selector: 'epm-link-to-new-password',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<p class="content">
    @if (description) {
    <span>{{ description }}</span>
    }
    <a class="link" [routerLink]="['/', routerName.Auth, routerName.NewPassword]">{{ linkDescription }}</a>
  </p>`,
  styleUrls: ['./link-to-new-password.component.scss']
})
export class LinkToNewPasswordComponent {
  @Input({ required: true }) linkDescription = '';
  @Input() description = '';

  public readonly routerName: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
}
