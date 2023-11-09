import { STEPPER_STEPS } from './auth.config';
import { FormControl } from '@angular/forms';

export interface StepperConfig {
  activeStep: STEPPER_STEPS;
  isSecondStepDisabled: boolean;
  isThirdStepDisabled: boolean;
}

export type VoidCallback = () => void;

export interface ActionHandlerList {
  firstStep: VoidCallback;
  secondStep: VoidCallback;
  thirdStep: VoidCallback;
}

type NestedFormInterface<T, U> = {
  [key in keyof T]: FormControl<U>;
};

export interface LoginData {
  email: string;
  password: string;
}

export type LoginForm = NestedFormInterface<LoginData, string>;

export interface NewPasswordData {
  newPassword: string;
  confirmNewPassword: string;
  code: string;
  email: string;
}

export type NewPasswordForm = NestedFormInterface<NewPasswordData, string>;

export interface SocialURLsList {
  linkedin: string;
  instagram: string;
  facebook: string;
  skype: string;
  telegram: string;
}

export interface UserAuthFormData {
  email: string;
  password: string;
  repeatPassword: string;
  givenName: string;
  familyName: string;
  userAvatar: string;
  socialMedias: SocialURLsList;
}

export type UserAuthData = Omit<UserAuthFormData, 'repeatPassword'>;

export interface ConfirmPasswordData {
  code: FormControl<string>;
  email: FormControl<string>;
}
