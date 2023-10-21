import { SOCIAL_ICONS } from '../app.config';

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
