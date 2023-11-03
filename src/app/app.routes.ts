import { Routes } from '@angular/router';

import { APP_ROUTER_NAME, HEADER_CONFIG_LIST, HEADER_CONFIG_NAME } from './app.config';

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
  },
  {
    path: APP_ROUTER_NAME.AvatarEdit,
    loadComponent: () => import('./shared/components/avatar-edit/avatar-edit.component'),
    data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.avatarEdit]
  },
  {
    path: 'not-found',
    loadComponent: () => import('./shared/components/not-found/not-found.component')
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component')
  }
];
