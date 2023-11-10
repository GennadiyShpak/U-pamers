import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, take, tap } from 'rxjs';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { APP_ROUTER_NAME, BUTTON_THEMES, INPUT_TYPES } from '../../../app.config';
import { CustomValidators } from '../../../shared/validators/custom.validators';
import { NewPasswordForm } from '../../auth.model';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';
import { PASSWORDS_TO_COMPARE } from '../../auth.config';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'epm-enter-code',
  standalone: true,
  imports: [
    CommonModule,
    EpmInputComponent,
    EpmButtonComponent,
    RouterLink,
    ReactiveFormsModule,
    EpmErrorMessageComponent
  ],
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export default class EnterCodeComponent implements OnInit {
  isNewPasswordFormSubmitted = false;
  createNewPasswordForm!: FormGroup<NewPasswordForm>;

  readonly priorityErrors = ['samePasswordsValue'];
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly loginLink: string = `/${APP_ROUTER_NAME.Auth}/${APP_ROUTER_NAME.LogIn}`;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;

  get email(): FormControl {
    return this.createNewPasswordForm.controls.email;
  }

  get code(): FormControl {
    return this.createNewPasswordForm.controls.code;
  }

  get newPassword(): FormControl {
    return this.createNewPasswordForm.controls.newPassword;
  }

  get confirmNewPassword(): FormControl {
    return this.createNewPasswordForm.controls.confirmNewPassword;
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private cognitoService: CognitoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initCreateNewPasswordForm();
  }

  onSubmit(): void {
    const { email, code, newPassword } = this.createNewPasswordForm.value;
    this.cognitoService
      .forgotPasswordSubmit(email!, code!, newPassword!)
      .pipe(
        tap(() => {
          this.isNewPasswordFormSubmitted = true;
        }),
        take(1),
        catchError(() => this.router.navigateByUrl(`/${APP_ROUTER_NAME.NotFound}`))
      )
      .subscribe();
  }

  private initCreateNewPasswordForm(): void {
    this.createNewPasswordForm = this.fb.group(
      {
        newPassword: [
          '',
          {
            validators: [Validators.required, Validators.minLength(8), CustomValidators.password()]
          }
        ],
        confirmNewPassword: [
          '',
          {
            validators: [Validators.required]
          }
        ],
        code: ['', Validators.required],
        email: ['', Validators.required]
      },
      {
        validators: [
          CustomValidators.matchControlsValue(
            'samePasswordsValue',
            PASSWORDS_TO_COMPARE.NewPassword,
            PASSWORDS_TO_COMPARE.ConfirmNewPassword
          )
        ]
      }
    );
  }
}
