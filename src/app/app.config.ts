import { HeaderIcons, HeaderSettings, SVGIcon } from './app.model';

export enum APP_ROUTER_NAME {
  Auth = 'auth',
  Main = 'main',
  LogIn = 'log-in',
  SignUp = 'sign-up',
  RestorePassword = 'restore-password',
  NewPassword = 'new-password',
  Contact = 'contact',
  Chat = 'chat',
  MyProfile = 'my-profile',
  ProfileSettings = 'profile-settings',
  Details = 'details',
  Info = 'info',
  Privacy = 'privacy'
}

export enum SOCIAL_ICONS {
  Teams = 'assets/icons/teams_24x24.png',
  Instagram = 'assets/icons/instagram_24x24.png',
  Facebook = 'assets/icons/facebook_24x24.png',
  Skype = 'assets/icons/skype_24x24.png',
  LinkedIn = 'assets/icons/linkedin_24x24.png',
  Telegram = 'assets/icons/telegram_24x24.png',
  none = ''
}

export enum BUTTON_THEMES {
  primary = 'primary',
  inverted = 'inverted',
  transparent = 'transparent',
  rounded = 'rounded',
  roundedInverted = 'rounded_inverted'
}

export enum HEADER_RIGHT_BLOCK {
  LoginButton = 'loginButton',
  StatusBar = 'statusBar',
  Skip = 'skip'
}

export enum HEADER_ICON_KEY {
  Logo = 'logoIcon',
  Close = 'closeIcon',
  Arrow = 'arrowIcon'
}

const logoIcon: SVGIcon = {
  src: '/assets/images/header-icon/logo.svg',
  alt: 'logo',
  size: '32',
  link: '/'
};

const arrowIcon: SVGIcon = {
  src: '/assets/images/header-icon/arrow.svg',
  alt: 'navigate to previous page',
  size: '24',
  link: '../'
};

const closeIcon: SVGIcon = {
  src: '/assets/images/header-icon/close.svg',
  alt: 'close',
  size: '24',
  link: '/'
};

const messageIcon: SVGIcon = {
  src: '/assets/images/header-icon/message.svg',
  alt: 'new message notification',
  size: '24'
};

export const HEADER_ICONS: HeaderIcons = {
  logoIcon,
  arrowIcon,
  closeIcon,
  messageIcon
};

export const headerSettingsSet: { [key: string]: HeaderSettings } = {
  logIn: {
    leftButton: HEADER_ICON_KEY.Close,
    title: 'Log in'
  },
  signUp: {
    leftButton: HEADER_ICON_KEY.Close,
    title: 'Sign Up'
  },
  resetPassword: {
    leftButton: HEADER_ICON_KEY.Arrow,
    title: 'Reset password'
  },
  newPassword: {
    leftButton: HEADER_ICON_KEY.Close,
    title: 'Create new password'
  },
  mainRoot: {
    leftButton: HEADER_ICON_KEY.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  chats: {
    leftButton: HEADER_ICON_KEY.Arrow,
    title: 'Chats',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  myProfile: {
    leftButton: HEADER_ICON_KEY.Arrow,
    title: 'My Profile',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  profileSettings: {
    leftButton: HEADER_ICON_KEY.Arrow,
    title: 'Profile Settings',
    right: HEADER_RIGHT_BLOCK.StatusBar
  }
};
