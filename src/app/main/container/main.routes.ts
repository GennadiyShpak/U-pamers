import { Routes } from '@angular/router';

import { APP_ROUTER_NAME, headerSettingsSet } from '../../app.config';
import { MainComponent } from './main.component';
import { ContactListComponent } from '../pages/contact-list/contact-list.component';
import { ChatListComponent } from '../pages/chat-list/chat-list.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ContactComponent } from '../components/contact/contact.component';

export default [
  {
    path: '',
    component: MainComponent,
    data: headerSettingsSet['mainRoot'],
    children: [
      {
        path: '',
        redirectTo: APP_ROUTER_NAME.Contact,
        pathMatch: 'full',
        data: headerSettingsSet['mainRoot']
      },
      {
        path: APP_ROUTER_NAME.Contact,
        component: ContactListComponent,
        data: headerSettingsSet['mainRoot'],
        title: 'U-PAMERS'
      },
      {
        path: `${APP_ROUTER_NAME.Contact}/:userId`,
        component: ContactComponent,
        data: headerSettingsSet['contacts']
      },
      {
        path: APP_ROUTER_NAME.Chat,
        component: ChatListComponent,
        title: 'U-PAMERS | Chat',
        data: headerSettingsSet['chats']
      },
      {
        path: `${APP_ROUTER_NAME.Chat}/:userId`,
        component: ChatComponent,
        data: headerSettingsSet['chats']
      },
      {
        path: APP_ROUTER_NAME.MyProfile,
        loadComponent: () => import('../pages/profile/profile.component'),
        title: 'U-PAMERS | My Profile',
        data: headerSettingsSet['myProfile']
      },
      {
        path: APP_ROUTER_NAME.ProfileSettings,
        loadChildren: () => import('../pages/profile-settings/profile-settings.routes'),
        title: 'U-PAMERS | Profile Settings',
        data: headerSettingsSet['profileSettings']
      }
    ]
  }
] as Routes;
