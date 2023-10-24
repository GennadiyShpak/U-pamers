import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { APP_ROUTER_NAME } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;

  constructor(private router: Router) {}

  onCreateAccountClick(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }
}
