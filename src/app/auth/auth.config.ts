import { SocialURLsList, StepperConfig } from './auth.model';

export enum STEPPER_STEPS {
  FirstStep = 'firstStep',
  SecondStep = 'secondStep',
  ThirdStep = 'thirdStep'
}

export const INITIAL_STEPPER_CONFIG: StepperConfig = {
  activeStep: STEPPER_STEPS.FirstStep,
  isSecondStepDisabled: true,
  isThirdStepDisabled: true
};

export enum NEXT_STEP_BUTTON_CONFIG {
  Continue = 'Continue',
  CreateAccount = 'Create account'
}

export enum PASSWORDS_TO_COMPARE {
  NewPassword = 'newPassword',
  ConfirmNewPassword = 'confirmNewPassword',
  Password = 'password',
  RepeatPassword = 'repeatPassword'
}

const getSocialPlaceholder = (socialName: string): string => `${socialName} URL (Optional)`;

export const SOCIAL_PLACEHOLDERS_CONFIG: SocialURLsList = {
  linkedin: getSocialPlaceholder('LinkedIn'),
  instagram: getSocialPlaceholder('Instagram'),
  facebook: getSocialPlaceholder('Facebook'),
  skype: getSocialPlaceholder('Skype'),
  telegram: getSocialPlaceholder('Telegram')
};
