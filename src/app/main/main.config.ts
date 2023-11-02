import { GetLink, PrivacyItemsControlsData } from './main.model';

export const SOCIAL_PROFILE_LINKS_ROOT: { [key: string]: GetLink } = {
  linkedin: (userName: string) => (userName ? `https://www.linkedin.com/in/${userName}` : ''),
  instagram: (userName: string) => (userName ? `https://instagram.com/${userName}` : ''),
  telegram: (userName: string) => (userName ? `https:/t.me/${userName}` : ''),
  facebook: (userName: string) => (userName ? `https://www.facebook.com/${userName}` : ''),
  skype: (userName: string) => (userName ? `skype:${userName}?chat` : '')
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
