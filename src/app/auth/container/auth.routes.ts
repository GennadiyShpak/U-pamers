import { AuthComponent } from './auth.component';
import { APP_ROUTER_NAME } from '../../app.config';
import { LogInComponent } from '../pages/log-in/log-in.component';

export default [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTER_NAME.LogIn,
        pathMatch: 'full'
      },
      {
        path: APP_ROUTER_NAME.LogIn,
        component: LogInComponent
      },
      {
        path: APP_ROUTER_NAME.SignUp,
        loadComponent: () => import('../pages/sign-up/sign-up.component')
      },
      {
        path: APP_ROUTER_NAME.RestorePassword,
        loadComponent: () => import('../pages/restore-password/restore-password.component')
      },
      {
        path: APP_ROUTER_NAME.NewPassword,
        loadComponent: () => import('../pages/new-password/new-password.component')
      }
    ]
  }
];
