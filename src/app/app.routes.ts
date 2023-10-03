import { Routes } from '@angular/router';
import { APP_ROUTER_NAME } from './app.config';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTER_NAME.Main,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTER_NAME.Auth,
    loadChildren: () => import('./auth/container/auth.routes')
  },
  {
    path: APP_ROUTER_NAME.Main,
    loadChildren: () => import('./main/container/main.routes')
  }
];
