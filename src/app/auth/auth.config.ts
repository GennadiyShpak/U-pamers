import { StepperConfig } from './auth.model';

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
  ConfirmNewPassword = 'confirmNewPassword'
}
