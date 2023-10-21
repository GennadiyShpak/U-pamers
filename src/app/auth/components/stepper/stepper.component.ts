import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { StepperConfig } from '../../auth.model';
import { STEPPER_STEPS } from '../../auth.config';

@Component({
  selector: 'epm-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;

  constructor(public authService: AuthService) {}

  onStepButtonClick(clickedStep: STEPPER_STEPS): void {
    this.authService.stepperConfig.mutate((value: StepperConfig) => (value.activeStep = clickedStep));
  }
}
