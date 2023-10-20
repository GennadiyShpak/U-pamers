import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from '../../components/stepper/stepper.component';
import { AuthService } from '../../../services/auth.service';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { STEPPER_STEPS } from '../../auth.config';

@Component({
  selector: 'epm-sign-up',
  standalone: true,
  imports: [CommonModule, StepperComponent, EpmButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent {
  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;

  constructor(public authService: AuthService) {}

  onNextStepClick(): void {
    this.authService.onNextStepClick(this.authService.stepperConfig().activeStep);
  }
}
