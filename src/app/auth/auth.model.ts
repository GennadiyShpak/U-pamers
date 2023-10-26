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

export type LoginForm = NestedFormInterface<LoginData, string>
