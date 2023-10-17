import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

import { STEPPER_CONFIG_DATA, STEPPER_STEPS } from '../auth/auth.config';
import { ActionHandlerList, StepperConfig, VoidCallback } from '../auth/auth.model';
import { APP_ROUTER_NAME } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  stepperConfig: WritableSignal<StepperConfig> = signal({ ...STEPPER_CONFIG_DATA });

  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;

  constructor(private router: Router) {}

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
    this.stepperConfig.mutate((config: StepperConfig) => {
      config.activeStep = STEPPER_STEPS.SecondStep;
      config.isSecondStepDisabled = false;
    });
  }

  private onThirdStepClick(): void {
    this.stepperConfig.mutate((config: StepperConfig) => {
      config.activeStep = STEPPER_STEPS.ThirdStep;
      config.isThirdStepDisabled = false;
    });
  }

  private onCreateAccountClick(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }
}
