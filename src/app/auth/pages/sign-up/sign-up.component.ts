import { ChangeDetectorRef, Component, effect, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { APP_ROUTER_NAME, INPUT_TYPES } from '../../../app.config';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { NEXT_STEP_BUTTON_CONFIG, STEPPER_STEPS } from '../../auth.config';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'epm-sign-up',
  standalone: true,
  imports: [CommonModule, StepperComponent, EpmButtonComponent, EpmInputComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent implements OnInit {
  nextStepButtonValue: NEXT_STEP_BUTTON_CONFIG = NEXT_STEP_BUTTON_CONFIG.Continue;
  registerForm!: FormGroup;

  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;
  readonly nextButtonConfig: typeof NEXT_STEP_BUTTON_CONFIG = NEXT_STEP_BUTTON_CONFIG;
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;

  constructor(
    public stepperService: StepperService,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get firstName() {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.registerForm.get('lastName') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get repeatPassword() {
    return this.registerForm.get('repeatPassword') as FormControl;
  }

  ngOnInit(): void {
    this.registerForm = this.buildRegisterForm();
    this.getNextStepButtonValue();
  }

  onNextStepClick(): void {
    this.stepperService.onNextStepClick(this.stepperService.stepperConfig().activeStep);
  }

  private getNextStepButtonValue(): void {
    effect(
      () => {
        this.nextStepButtonValue =
          this.stepperService.stepperConfig().activeStep === this.stepperSteps.ThirdStep
            ? this.nextButtonConfig.CreateAccount
            : this.nextButtonConfig.Continue;
      },
      { injector: this.injector }
    );

    this.cdr.detectChanges();
  }

  private buildRegisterForm(): FormGroup {
    return (this.registerForm = this.fb.group({
      email: [''],
      firstName: [''],
      lastName: [''],
      password: [''],
      repeatPassword: ['']
    }));
  }
}
