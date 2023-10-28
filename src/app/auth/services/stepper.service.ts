import { Injectable, signal, WritableSignal } from '@angular/core';

import { StepperConfig } from '../auth.model';
import { INITIAL_STEPPER_CONFIG } from '../auth.config';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  stepperConfig: WritableSignal<StepperConfig> = signal(INITIAL_STEPPER_CONFIG);
}
