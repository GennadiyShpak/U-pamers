import { Routes } from '@angular/router';

import { APP_ROUTER_NAME, HEADER_CONFIG_LIST, HEADER_CONFIG_NAME } from '../../app.config';
import { MainComponent } from './main.component';
import { ContactListComponent } from '../pages/contact-list/contact-list.component';
import { ChatListComponent } from '../pages/chat-list/chat-list.component';
import { ChatComponent } from '../components/chat/chat.component';
import UserComponent from '../pages/user/user.component';

export default [
  {
    path: '',
    component: MainComponent,
    data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.mainRoot],
    children: [
      {
        path: '',
        redirectTo: APP_ROUTER_NAME.Contact,
        pathMatch: 'full',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.mainRoot]
      },
      {
        path: APP_ROUTER_NAME.Contact,
        component: ContactListComponent,
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.mainRoot],
        title: 'U-PAMERS'
      },
      {
        path: `${APP_ROUTER_NAME.Contact}/:userId`,
        component: UserComponent,
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.contacts]
      },
      {
        path: APP_ROUTER_NAME.Chat,
        component: ChatListComponent,
        title: 'U-PAMERS | Chat',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.chats]
      },
      {
        path: `${APP_ROUTER_NAME.Chat}/:userId`,
        component: ChatComponent,
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.chats]
      },
      {
        path: APP_ROUTER_NAME.MyProfile,
        loadComponent: () => import('../pages/profile/profile.component'),
        title: 'U-PAMERS | My Profile',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.myProfile]
      },
      {
        path: APP_ROUTER_NAME.ProfileSettings,
        loadChildren: () => import('../pages/profile-settings/profile-settings.routes'),
        title: 'U-PAMERS | Profile Settings',
        data: HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.profileSettings]
      }
    ]
  }
] as Routes;
