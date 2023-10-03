import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTER_NAME } from '../../../app.config';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'epm-sign-in',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;

  constructor(private router: Router) {}

  onSignIn(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }
}
