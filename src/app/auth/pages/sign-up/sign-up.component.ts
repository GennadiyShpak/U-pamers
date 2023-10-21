import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from '../../components/stepper/stepper.component';
import { AuthService } from '../../../services/auth.service';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { NEXT_STEP_BUTTON_CONFIG, STEPPER_STEPS } from '../../auth.config';

@Component({
  selector: 'epm-sign-up',
  standalone: true,
  imports: [CommonModule, StepperComponent, EpmButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent implements OnInit {
  nextStepButtonValue!: NEXT_STEP_BUTTON_CONFIG;

  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;
  readonly nextButtonConfig: typeof NEXT_STEP_BUTTON_CONFIG = NEXT_STEP_BUTTON_CONFIG;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.nextStepButtonValue =
      this.authService.stepperConfig().activeStep === this.stepperSteps.ThirdStep
        ? this.nextButtonConfig.CreateAccount
        : this.nextButtonConfig.Continue;
  }

  onNextStepClick(): void {
    this.authService.onNextStepClick(this.authService.stepperConfig().activeStep);
  }
}
