import { Routes } from '@angular/router';

import { APP_ROUTER_NAME } from '../../app.config';
import { MainComponent } from './main.component';
import { ContactListComponent } from '../pages/contact-list/contact-list.component';
import { ChatListComponent } from '../pages/chat-list/chat-list.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ContactComponent } from '../components/contact/contact.component';

export default [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTER_NAME.Contact,
        pathMatch: 'full'
      },
      {
        path: APP_ROUTER_NAME.Contact,
        component: ContactListComponent
      },
      {
        path: `${APP_ROUTER_NAME.Contact}/:userId`,
        component: ContactComponent
      },
      {
        path: APP_ROUTER_NAME.Chat,
        component: ChatListComponent
      },
      {
        path: `${APP_ROUTER_NAME.Chat}/:userId`,
        component: ChatComponent
      },
      {
        path: APP_ROUTER_NAME.MyProfile,
        loadComponent: () => import('../pages/profile/profile.component')
      },
      {
        path: APP_ROUTER_NAME.ProfileSettings,
        loadChildren: () => import('../pages/profile-settings/profile-settings.routes')
      }
    ]
  }
] as Routes;
