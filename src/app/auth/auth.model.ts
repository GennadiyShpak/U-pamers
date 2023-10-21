import { FormControl } from "@angular/forms";
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

type NestedFormInterface<T, N> = {
  [K in keyof T]: FormControl<N>;
};

export interface LoginData {
  email: string;
  password: string;
}

export interface NewPasswordData {
  newPassword: string;
  confirmNewPassword: string;
}

export type NewPasswordForm = NestedFormInterface<NewPasswordData, string>
