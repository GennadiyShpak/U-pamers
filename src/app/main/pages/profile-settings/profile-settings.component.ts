import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTER_NAME } from '../../../app.config';

@Component({
  selector: 'epm-profile-settings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent {
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
}
