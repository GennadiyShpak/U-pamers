import { HeaderConfig } from './app.model';

export enum APP_ROUTER_NAME {
  Auth = 'auth',
  Main = 'main',
  LogIn = 'log-in',
  SignUp = 'sign-up',
  ResetPassword = 'reset-password',
  NewPassword = 'new-password',
  Contact = 'contact',
  Chat = 'chat',
  MyProfile = 'my-profile',
  ProfileSettings = 'profile-settings',
  Details = 'details',
  Info = 'info',
  Privacy = 'privacy'
}

export const CONTACT_ROUTE = '/main/contact';

export enum SOCIAL_ICONS {
  Instagram = 'instagram',
  Facebook = 'facebook',
  Skype = 'skype',
  LinkedIn = 'linkedin',
  Telegram = 'telegram',
  none = ''
}

export enum BUTTON_THEMES {
  Primary = 'primary',
  Secondary = 'secondary',
  IconRight = 'icon-right',
  IconOnly = 'icon-only',
  Small = 'small',
  Link = 'link'
}

export enum TOASTER_ICONS {
  Close = 'close',
  Info = 'info'
}

export enum ICON_NAMES {
  Arrow = 'arrow',
  Close = 'close',
  Chat = 'chat',
  Search = 'search',
  Filter = 'filter',
  Edit = 'edit',
  Checked = 'checked',
  DoubleChecked = 'double-checked',
  CircleCheck = 'circle-check',
  Calendar = 'calendar',
  Shown = 'shown',
  Hidden = 'hidden',
  Info = 'info',
  Link = 'link',
  Reload = 'reload',
  SuccessFilled = 'success-filled',
  WarningFilled = 'warning-filled',
  ErrorFilled = 'error-filled',
  InfoFilled = 'info-filled'
}

export enum HEADER_RIGHT_BLOCK {
  LoginButton = 'loginButton',
  StatusBar = 'statusBar',
  Skip = 'skip'
}

export enum HEADER_ICON_TYPE {
  Logo = 'logo',
  Close = 'close',
  Arrow = 'arrow'
}

export const enum HEADER_CONFIG_NAME {
  logIn = 'logIn',
  signUp = 'signUp',
  resetPassword = 'resetPassword',
  newPassword = 'newPassword',
  mainRoot = 'mainRoot',
  contacts = 'contacts',
  chats = 'chats',
  myProfile = 'myProfile',
  profileSettings = 'profileSettings',
  accountDetails = 'accountDetails',
  profileInfo = 'profileInfo',
  privacy = 'privacy'
}

export const HEADER_CONFIG_LIST: { [key in HEADER_CONFIG_NAME]: HeaderConfig } = {
  logIn: {
    leftButton: HEADER_ICON_TYPE.Close,
    title: 'Login'
  },
  signUp: {
    leftButton: HEADER_ICON_TYPE.Close,
    title: 'Sign Up'
  },
  resetPassword: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'Reset password'
  },
  newPassword: {
    leftButton: HEADER_ICON_TYPE.Close,
    title: 'Change password'
  },
  mainRoot: {
    leftButton: HEADER_ICON_TYPE.Logo,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar,
    colored: true
  },
  contacts: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: '',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  chats: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'Chats',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  myProfile: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'My Profile',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  profileSettings: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'Profile Settings',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  accountDetails: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'Account Details',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  profileInfo: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'Profile Info',
    right: HEADER_RIGHT_BLOCK.StatusBar
  },
  privacy: {
    leftButton: HEADER_ICON_TYPE.Arrow,
    title: 'Privacy',
    right: HEADER_RIGHT_BLOCK.StatusBar
  }
};

export enum STEPPER_ICONS {
  FirstStepActive = 'first-step-active',
  SecondStepDisabled = 'second-step-disabled',
  SecondStepActive = 'second-step-active',
  ThirdStepDisabled = 'third-step-disabled',
  ThirdStepActive = 'third-step-active',
  FilledStep = 'filled-step',
  ErrorStep = 'error-step'
}

export enum INPUT_TYPES {
  Checkbox = 'checkbox',
  Date = 'date',
  Email = 'email',
  File = 'file',
  Password = 'password',
  Range = 'range',
  Search = 'search',
  Text = 'text',
  Url = 'url'
}

export enum INPUT_PLACEHOLDERS {
  Linkedin = 'http://linkedin.com',
  Instagram = 'http://instagram.com',
  Telegram = 'http://telegram.com',
  Facebook = 'http://facebook.com',
  Skype = 'nickname',
  None = ''
}

export enum ERROR_MESSAGES {
  required = 'This field cannot be empty',
  minlength = 'Short passwords are easy to guess. Try the one with at least 8 characters.',
  passwordLength = 'Short passwords are easy to guess. Try the one with at least 8 characters.',
  passwordHasUpperCase = 'Make sure to use both upper-case and lower-case letters.',
  passwordHasLowerCase = 'Make sure to use both upper-case and lower-case letters.',
  passwordHasNumeric = 'Make sure to use at least 1 digit for your password.',
  passwordHasNonAlphaNumeric = 'Make sure to use at least 1 special character for your password.',
  sameConfirmPassword = 'Passwords don’t match.',
  // TODO ask for appropriate messages
  passwordWithoutSpace = 'Spaces are not allowed',
  passwordAllowedCharacters = 'Passwords contains not allowed characters'
}

export const REGEXP_PATTERNS = {
  passwordAllowedCharacters: /^([A-Za-z0-9!"§$%&/\\(){}[\]=?+*#'^°,;.:<>|@~\-_´`])*$/,
  hasUpperCase: /[A-Z]+/,
  hasLowerCase: /[a-z]+/,
  hasNumeric: /\d+/,
  hasNonAlphaNumeric: /[!"§$%&/\\(){}[\]=?+*#'^°,;.:<>|@~\-_´`]+/,
  hasSpace: /\s/
};
