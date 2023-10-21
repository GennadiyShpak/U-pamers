import { STEPPER_STEPS } from './auth.config';

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

export interface LoginData {
  email: string;
  password: string;
}
