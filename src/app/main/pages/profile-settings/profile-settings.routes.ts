import { APP_ROUTER_NAME, headerSettingsSet } from '../../../app.config';
import { ProfileSettingsComponent } from './profile-settings.component';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileSettingsComponent,
        data: headerSettingsSet['profileSettings']
      },
      {
        path: APP_ROUTER_NAME.Details,
        loadComponent: () => import('../details/details.component'),
        data: headerSettingsSet['accountDetails'],
        title: 'U-PAMERS | Account Details'
      },
      {
        path: APP_ROUTER_NAME.Info,
        loadComponent: () => import('../info/info.component'),
        data: headerSettingsSet['profileInfo'],
        title: 'U-PAMERS | Profile Info'
      },
      {
        path: APP_ROUTER_NAME.Privacy,
        loadComponent: () => import('../privacy/privacy.component'),
        data: headerSettingsSet['privacy'],
        title: 'U-PAMERS | Privacy'
      }
    ]
  }
];
