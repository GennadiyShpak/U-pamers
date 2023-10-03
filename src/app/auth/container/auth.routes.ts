import { AuthComponent } from './auth.component';
import { APP_ROUTER_NAME } from '../../app.config';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';

export default [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTER_NAME.SignIn,
        pathMatch: 'full'
      },
      {
        path: APP_ROUTER_NAME.SignIn,
        component: SignInComponent
      },
      {
        path: APP_ROUTER_NAME.ForgotPass,
        component: ForgotPasswordComponent
      },
      {
        path: APP_ROUTER_NAME.SignUp,
        component: SignUpComponent,
        loadChildren: () => import('../pages/sign-up/sign-up.routes')
      }
    ]
  }
];
