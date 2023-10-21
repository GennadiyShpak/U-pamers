import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTER_NAME, BUTTON_THEMES } from '../../../app.config';
import { Router, RouterLink } from '@angular/router';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';

@Component({
  selector: 'epm-log-in',
  standalone: true,
  imports: [CommonModule, RouterLink, EpmInputComponent, EpmButtonComponent],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

  constructor(private router: Router) {}

  onLogIn(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }
}
