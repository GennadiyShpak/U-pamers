import { APP_ROUTER_NAME } from '../../../app.config';
import { ProfileSettingsComponent } from './profile-settings.component';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileSettingsComponent
      },
      {
        path: APP_ROUTER_NAME.Details,
        loadComponent: () => import('../details/details.component')
      },
      {
        path: APP_ROUTER_NAME.Info,
        loadComponent: () => import('../info/info.component')
      },
      {
        path: APP_ROUTER_NAME.Privacy,
        loadComponent: () => import('../privacy/privacy.component')
      }
    ]
  }
];
