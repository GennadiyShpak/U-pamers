import {
  ChangeDetectorRef,
  Component,
  effect,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  Signal,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { catchError, take, tap } from 'rxjs';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import {
  APP_ROUTER_NAME,
  ICON_NAMES,
  INPUT_TYPES,
  SOCIAL_ICONS,
  SOCIAL_PLACEHOLDERS_CONFIG_OPTIONAL
} from '../../../app.config';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import {
  INITIAL_STEPPER_CONFIG,
  NEXT_STEP_BUTTON_CONFIG,
  STEPPER_STEPS,
  PASSWORDS_TO_COMPARE
} from '../../auth.config';
import { StepperService } from '../../services/stepper.service';
import { ActionHandlerList, StepperConfig, UserAuthFormData, VoidCallback } from '../../auth.model';
import { AuthService } from '../../../services/auth.service';
import { CognitoService } from '../../../services/cognito.service';
import { RegisterForm } from '../../../main/main.model';
import { CustomValidators } from '../../../shared/validators/custom.validators';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';

@Component({
  selector: 'epm-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    StepperComponent,
    EpmButtonComponent,
    EpmInputComponent,
    ReactiveFormsModule,
    RouterModule,
    EpmErrorMessageComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export default class SignUpComponent implements OnInit, OnDestroy {
  @ViewChild('avatarInput') avatarInput!: ElementRef;

  nextStepButtonValue: NEXT_STEP_BUTTON_CONFIG = NEXT_STEP_BUTTON_CONFIG.Continue;
  registerForm!: FormGroup<RegisterForm>;

  readonly stepperSteps: typeof STEPPER_STEPS = STEPPER_STEPS;
  readonly nextButtonConfig: typeof NEXT_STEP_BUTTON_CONFIG = NEXT_STEP_BUTTON_CONFIG;
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;
  readonly iconNames: typeof ICON_NAMES = ICON_NAMES;
  readonly userAvatarDraft: Signal<SafeUrl> = this.authService.userAvatarDraft;
  readonly currentStep: Signal<StepperConfig> = this.stepperService.stepperConfig;
  readonly socialIcons: typeof SOCIAL_ICONS = SOCIAL_ICONS;
  readonly socialPlaceholders: typeof SOCIAL_PLACEHOLDERS_CONFIG_OPTIONAL = SOCIAL_PLACEHOLDERS_CONFIG_OPTIONAL;

  constructor(
    private stepperService: StepperService,
    private authService: AuthService,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
    private fb: NonNullableFormBuilder,
    private router: Router,
    private cognitoService: CognitoService
  ) {}

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get givenName(): FormControl {
    return this.registerForm.get('givenName') as FormControl;
  }

  get familyName(): FormControl {
    return this.registerForm.get('familyName') as FormControl;
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

  get linkedin(): FormControl {
    return this.registerForm.get('socialMedias.linkedin') as FormControl;
  }

  get instagram(): FormControl {
    return this.registerForm.get('socialMedias.instagram') as FormControl;
  }

  get telegram(): FormControl {
    return this.registerForm.get('socialMedias.telegram') as FormControl;
  }

  get facebook(): FormControl {
    return this.registerForm.get('socialMedias.facebook') as FormControl;
  }

  get skype(): FormControl {
    return this.registerForm.get('socialMedias.skype') as FormControl;
  }

  get isFormValid(): boolean {
    return this.currentStep().activeStep === this.stepperSteps.FirstStep ? this.registerForm.valid : true;
  }

  ngOnInit(): void {
    this.buildRegisterForm();
    this.getNextStepButtonValue();
    this.handleUserAvatarControl();
  }

  ngOnDestroy(): void {
    this.resetAuthSettings();
  }

  onNextStepClick(): void {
    this.authService.saveFormValue(this.registerForm.value as UserAuthFormData);
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

  private handleUserAvatarControl(): void {
    effect(
      () => {
        this.userAvatar.setValue(this.authService.userAvatarDraft());
      },
      { injector: this.injector }
    );
  }

  private buildRegisterForm(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', { validators: [Validators.required, Validators.email] }],
        givenName: ['', { validators: [Validators.required, CustomValidators.userName()] }],
        familyName: ['', { validators: [Validators.required, CustomValidators.userName()] }],
        password: ['', { validators: [Validators.required, Validators.minLength(8), CustomValidators.password()] }],
        repeatPassword: ['', { validators: [Validators.required] }],
        userAvatar: '',
        socialMedias: this.fb.group({
          linkedin: '',
          instagram: '',
          telegram: '',
          facebook: '',
          skype: ''
        })
      },
      {
        validators: [
          CustomValidators.matchControlsValue(
            'samePasswordsValue',
            PASSWORDS_TO_COMPARE.Password,
            PASSWORDS_TO_COMPARE.RepeatPassword
          )
        ]
      }
    );
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
    const formValue = this.authService.getDraftFormValue();
    this.cognitoService
      .signUp(formValue)
      .pipe(
        tap(() => this.router.navigateByUrl(`/auth/${this.appRoutes.ConfirmPassword}`)),
        take(1),
        catchError(() => this.router.navigateByUrl(`/${APP_ROUTER_NAME.NotFound}`))
      )
      .subscribe();
  }

  private resetAuthSettings(): void {
    this.stepperService.stepperConfig.set(INITIAL_STEPPER_CONFIG);
    this.authService.resetDraftFormValue();
    this.authService.setUserAvatarDraft('');
  }
}
