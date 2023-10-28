import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperConfig } from '../../auth.model';
import { STEPPER_STEPS } from '../../auth.config';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'epm-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;

  constructor(public stepperService: StepperService) {}

  onStepButtonClick(clickedStep: STEPPER_STEPS): void {
    this.stepperService.stepperConfig.update((config: StepperConfig) => ({
      ...config,
      activeStep: clickedStep
    }));
  }
}
