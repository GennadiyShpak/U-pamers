import { HEADER_ICON_TYPE, HEADER_RIGHT_BLOCK } from './app.config';
import { SafeValue } from '@angular/platform-browser';

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

export interface InterestChips {
  description: string;
  iconName: SafeValue;
}

export interface Chips {
  chipsData: InterestChips | string;
  isEditable: boolean;
  isActive: boolean;
}
