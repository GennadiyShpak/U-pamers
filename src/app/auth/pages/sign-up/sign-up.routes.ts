import { APP_ROUTER_NAME } from '../../../app.config';
import { CredentialsComponent } from '../credentials/credentials.component';
import { AboutComponent } from '../about/about.component';
import { InterestsComponent } from '../interests/interests.component';
import { SocialsComponent } from '../socials/socials.component';

export default [
  {
    path: '',
    redirectTo: APP_ROUTER_NAME.Credentials,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTER_NAME.Credentials,
    component: CredentialsComponent
  },
  {
    path: APP_ROUTER_NAME.About,
    component: AboutComponent
  },
  {
    path: APP_ROUTER_NAME.Interests,
    component: InterestsComponent
  },
  {
    path: APP_ROUTER_NAME.Socials,
    component: SocialsComponent
  }
];
