import { HEADER_ICON_TYPE, HEADER_RIGHT_BLOCK } from './app.config';

export interface HeaderSettings {
  leftButton: HEADER_ICON_TYPE;
  title?: string;
  right?: HEADER_RIGHT_BLOCK;
}

export type headerSettingsType =
  | 'logIn'
  | 'signUp'
  | 'resetPassword'
  | 'newPassword'
  | 'mainRoot'
  | 'contacts'
  | 'chats'
  | 'myProfile'
  | 'profileSettings'
  | 'accountDetails'
  | 'profileInfo'
  | 'privacy';

export interface ToasterMessage {
  title: string;
  description: string;
  linkedText?: string;
  url?: string[];
}

export interface ToasterMessages {
  notLoggedIn: ToasterMessage;
  notFilledProfile: ToasterMessage;
}
