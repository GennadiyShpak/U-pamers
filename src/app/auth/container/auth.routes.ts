import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { APP_ROUTER_NAME, HEADER_CONFIG_LIST, HEADER_CONFIG_NAME } from '../../app.config';
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
        component: LogInComponent,
        title: 'U-PAMERS | Log in',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.logIn]
      },
      {
        path: APP_ROUTER_NAME.SignUp,
        loadComponent: () => import('../pages/sign-up/sign-up.component'),
        title: 'U-PAMERS | Sign Up',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.signUp]
      },
      {
        path: APP_ROUTER_NAME.ConfirmPassword,
        loadComponent: () => import('../pages/confirm-password/confirm-password.component'),
        title: 'U-PAMERS | Confirm password',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.confirmPassword]
      },
      {
        path: APP_ROUTER_NAME.ResetPassword,
        loadComponent: () => import('../pages/reset-password/reset-password.component'),
        title: 'U-PAMERS | Reset password',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.resetPassword]
      },
      {
        path: APP_ROUTER_NAME.NewPassword,
        loadComponent: () => import('../pages/new-password/new-password.component'),
        title: 'U-PAMERS | Change password',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.newPassword]
      }
    ]
  }
] as Routes;
