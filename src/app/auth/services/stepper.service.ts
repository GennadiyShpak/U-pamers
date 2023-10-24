import { Injectable, signal, WritableSignal } from '@angular/core';

import { ActionHandlerList, StepperConfig, VoidCallback } from '../auth.model';
import { STEPPER_CONFIG_DATA, STEPPER_STEPS } from '../auth.config';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  stepperConfig: WritableSignal<StepperConfig> = signal(STEPPER_CONFIG_DATA);

  constructor(private authService: AuthService) {}

  onNextStepClick(step: STEPPER_STEPS): void {
    const handler: VoidCallback = this.getNextStepHandler(step);

    handler();
  }

  private getNextStepHandler(step: STEPPER_STEPS): VoidCallback {
    const handlerList: ActionHandlerList = {
      firstStep: this.onSecondStepClick.bind(this),
      secondStep: this.onThirdStepClick.bind(this),
      thirdStep: this.onCreateAccountClick.bind(this)
    };

    return handlerList[step];
  }

  private onSecondStepClick(): void {
    this.stepperConfig.update((config: StepperConfig) => ({
      ...config,
      activeStep: STEPPER_STEPS.SecondStep,
      isSecondStepDisabled: false
    }));
  }

  private onThirdStepClick(): void {
    this.stepperConfig.update((config: StepperConfig) => ({
      ...config,
      activeStep: STEPPER_STEPS.ThirdStep,
      isThirdStepDisabled: false
    }));
  }

  private onCreateAccountClick(): void {
    this.authService.onCreateAccountClick();
  }
}
