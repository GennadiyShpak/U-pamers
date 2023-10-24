import { ChangeDetectorRef, Component, effect, ElementRef, Injector, OnInit, Signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { APP_ROUTER_NAME, ICON_NAMES, INPUT_TYPES } from '../../../app.config';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { INITIAL_STEPPER_CONFIG, NEXT_STEP_BUTTON_CONFIG, STEPPER_STEPS } from '../../auth.config';
import { StepperService } from '../../services/stepper.service';
import { ActionHandlerList, StepperConfig, VoidCallback } from '../../auth.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'epm-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    StepperComponent,
    EpmButtonComponent,
    EpmInputComponent,
    RouterLink,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent implements OnInit {
  @ViewChild('avatarInput') avatarInput!: ElementRef;

  nextStepButtonValue: NEXT_STEP_BUTTON_CONFIG = NEXT_STEP_BUTTON_CONFIG.Continue;
  registerForm!: FormGroup;

  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;
  readonly nextButtonConfig: typeof NEXT_STEP_BUTTON_CONFIG = NEXT_STEP_BUTTON_CONFIG;
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;
  readonly iconNames: typeof ICON_NAMES = ICON_NAMES;
  readonly userAvatarDraft: Signal<SafeUrl> = this.authService.userAvatarDraft;
  readonly currentStep: Signal<StepperConfig> = this.stepperService.stepperConfig;

  constructor(
    private stepperService: StepperService,
    private authService: AuthService,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private router: Router
  ) {}

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get repeatPassword(): FormControl {
    return this.registerForm.get('repeatPassword') as FormControl;
  }

  get userAvatar(): FormControl {
    return this.registerForm.get('userAvatar') as FormControl;
  }

  ngOnInit(): void {
    this.registerForm = this.buildRegisterForm();
    this.getNextStepButtonValue();
  }

  onNextStepClick(): void {
    const handler: VoidCallback = this.getNextStepHandler(this.stepperService.stepperConfig().activeStep);
    handler();
  }

  handleAvatarEdit(event?: Event): void {
    const selectedEvent: Event = event || this.authService.fileEventDraft();

    this.authService.setImageChangeEvent(selectedEvent);
    this.router.navigateByUrl(`/${this.appRoutes.AvatarEdit}`);
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
      repeatPassword: [''],
      userAvatar: ['']
    }));
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
    this.stepperService.stepperConfig.update((config: StepperConfig) => ({
      ...config,
      activeStep: STEPPER_STEPS.SecondStep,
      isSecondStepDisabled: false
    }));
  }

  private onThirdStepClick(): void {
    this.stepperService.stepperConfig.update((config: StepperConfig) => ({
      ...config,
      activeStep: STEPPER_STEPS.ThirdStep,
      isThirdStepDisabled: false
    }));
  }

  private onCreateAccountClick(): void {
    this.authService.onCreateAccountClick();
    this.stepperService.stepperConfig.set(INITIAL_STEPPER_CONFIG);
    this.authService.setUserAvatarDraft('');
  }
}
