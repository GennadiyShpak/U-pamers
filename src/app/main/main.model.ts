import { SOCIAL_ICONS } from '../app.config';
import { FormControl } from '@angular/forms';

export interface User {
  name: string;
  surname: string;
  userId: string;
  avatarUrl: string;
}

export interface ChatLastMessage extends User {
  lastMessage: string;
  lastMessageDateTime: string;
}

export interface UserDetailed extends User {
  birthDate: string;
  about: string;
  interests: string[];
  location: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
    skype: string;
    telegram: string;
  };
}

export interface DetailedSocialLink {
  priority: number;
  link: string;
  type: SOCIAL_ICONS;
}

export interface ExpandedUserDetailed extends Omit<UserDetailed, 'socials'> {
  socials: DetailedSocialLink[];
}

export type GetLink = (userName: string) => string;

export interface ChatForm {
  message: FormControl<string>;
}

export interface Message {
  id: string;
  chatId: string;
  sender: string;
  time: string;
  text: string;
  read: boolean;
}

type SimpleFormType<T, U> = {
  [key in keyof T]: FormControl<U>;
};

export interface AccountDetailsData {
  email: string;
  firstName: string;
  lastName: string;
}

export type AccountDetailsForm = SimpleFormType<AccountDetailsData, string>;

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type ChangePasswordForm = SimpleFormType<ChangePasswordData, string>;
