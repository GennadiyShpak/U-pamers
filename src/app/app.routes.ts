import { Routes } from '@angular/router';
import { APP_ROUTER_NAME } from './app.config';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTER_NAME.auth,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTER_NAME.auth,
    loadChildren: () => import('./auth/container/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: APP_ROUTER_NAME.main,
    loadChildren: () => import('./main/container/main.routes').then(m => m.MAIN_ROUTES)
  }
];
