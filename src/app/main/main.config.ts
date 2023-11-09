import { GetLink, PrivacyItemsControlsData } from './main.model';

export const SOCIAL_PROFILE_LINKS_ROOT: { [key: string]: GetLink } = {
  Linkedin: (userName: string) => (userName ? `https://www.linkedin.com/in/${userName}` : ''),
  Instagram: (userName: string) => (userName ? `https://instagram.com/${userName}` : ''),
  Telegram: (userName: string) => (userName ? `https:/t.me/${userName}` : ''),
  Facebook: (userName: string) => (userName ? `https://www.facebook.com/${userName}` : ''),
  Skype: (userName: string) => (userName ? `skype:${userName}?chat` : '')
};

export enum PRIORITY_ORDER {
  linkedin,
  instagram,
  telegram,
  facebook,
  skype
}

export const DISABLED_PRIVACY_ITEMS: PrivacyItemsControlsData = {
  age: false,
  location: false,
  description: false
};
