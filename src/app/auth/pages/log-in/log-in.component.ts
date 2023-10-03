import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTER_NAME } from '../../../app.config';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'epm-log-in',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;

  constructor(private router: Router) {}

  onLogIn(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }
}
