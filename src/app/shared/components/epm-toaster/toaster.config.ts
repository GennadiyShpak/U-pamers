import { ToasterMessage, ToasterMessages } from '../../../app.model';
import { APP_ROUTER_NAME } from '../../../app.config';

export const TOASTER_MESSAGES: ToasterMessages = {
  notLoggedIn: {
    title: 'Wanna connect with U-pamers?',
    description: 'Start your journey with ',
    linkedText: 'login',
    url: ['/', APP_ROUTER_NAME.Auth, APP_ROUTER_NAME.LogIn]
  },
  notFilledProfile: {
    title: 'Wanna stand out?',
    description: 'Help others connect with you faster you by ',
    linkedText: 'adding more profile details',
    url: ['/', APP_ROUTER_NAME.Main, APP_ROUTER_NAME.ProfileSettings]
  }
};

export const initialToasterConfig: ToasterMessage = {
  title: '',
  description: '',
  linkedText: '',
  url: ['']
};
