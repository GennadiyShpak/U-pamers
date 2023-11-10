import { SOCIAL_ICONS } from '../app.config';
import { FormControl, FormGroup } from '@angular/forms';

export interface User {
  name: string;
  surname: string;
  userId: string;
  avatar: string;
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
  socialMedia: SocialLink;
  privacy: UserPrivacy;
}

export interface SocialLink {
  Instagram: string;
  Linkedin: string;
  Facebook: string;
  Skype: string;
  Telegram: string;
}

export interface UserPrivacy {
  description: boolean;
  location: boolean;
  account: boolean;
  age: boolean;
}

export interface DetailedSocialLink {
  priority: number;
  link: string;
  type: SOCIAL_ICONS;
}

export interface ExpandedUserDetailed extends Omit<UserDetailed, 'socialMedia'> {
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

export interface SocialMedias {
  linkedin: FormControl<string>;
  instagram: FormControl<string>;
  telegram: FormControl<string>;
  facebook: FormControl<string>;
  skype: FormControl<string>;
}

export interface RegisterForm {
  email: FormControl<string>;
  givenName: FormControl<string>;
  familyName: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
  userAvatar: FormControl<string>;
  socialMedias: FormGroup<SocialMedias>;
}

export interface PrivacyItemsControlsData {
  age: boolean;
  location: boolean;
  description: boolean;
}

export interface PrivacyItemsControls {
  age: FormControl<boolean>;
  location: FormControl<boolean>;
  description: FormControl<boolean>;
}

export interface PrivacyStatusForm {
  account: FormControl<boolean>;
  privacyItems: FormGroup<PrivacyItemsControls>;
}

export interface ProfileDetailsForm {
  birthDate: FormControl<string>;
  location: FormControl<string>;
  about: FormControl<string>;
  socials: FormGroup<SocialMedias>;
}
