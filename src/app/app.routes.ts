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
    loadChildren: () => import('./auth/container/auth.routes')
  },
  {
    path: APP_ROUTER_NAME.main,
    loadChildren: () => import('./main/container/main.routes')
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component')
  }
];
