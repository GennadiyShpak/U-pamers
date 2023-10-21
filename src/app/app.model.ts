import { HEADER_ICON_TYPE, HEADER_RIGHT_BLOCK } from './app.config';

export interface HeaderConfig {
  leftButton: HEADER_ICON_TYPE;
  title?: string;
  right?: HEADER_RIGHT_BLOCK;
  colored?: boolean;
}

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

