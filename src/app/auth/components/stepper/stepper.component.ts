import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { StepperConfig } from '../../auth.model';
import { STEPPER_CONFIG_DATA, STEPPER_STEPS } from '../../auth.config';

@Component({
  selector: 'epm-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.stepperConfig.set({ ...STEPPER_CONFIG_DATA });
  }

  onStepButtonClick(clickedStep: STEPPER_STEPS): void {
    this.authService.stepperConfig.mutate((value: StepperConfig) => (value.activeStep = clickedStep));
  }
}
