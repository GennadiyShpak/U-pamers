import { APP_ROUTER_NAME, headerSettingsSet } from '../../../app.config';
import { ProfileSettingsComponent } from './profile-settings.component';

export default [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfileSettingsComponent,
        data: headerSettingsSet['myProfile']
      },
      {
        path: APP_ROUTER_NAME.Details,
        loadComponent: () => import('../details/details.component'),
        title: 'U-PAMERS | Account Details'
      },
      {
        path: APP_ROUTER_NAME.Info,
        loadComponent: () => import('../info/info.component'),
        title: 'U-PAMERS | Profile Info'
      },
      {
        path: APP_ROUTER_NAME.Privacy,
        loadComponent: () => import('../privacy/privacy.component'),
        title: 'U-PAMERS | Profile privacy'
      }
    ]
  }
];
