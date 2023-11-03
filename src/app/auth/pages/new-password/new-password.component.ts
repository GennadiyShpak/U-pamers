import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { APP_ROUTER_NAME, BUTTON_THEMES, INPUT_TYPES } from '../../../app.config';
import { CustomValidators } from '../../../shared/validators/custom.validators';
import { NewPasswordForm } from '../../auth.model';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';
import { PASSWORDS_TO_COMPARE } from '../../auth.config';

@Component({
  selector: 'epm-new-password',
  standalone: true,
  imports: [
    CommonModule,
    EpmInputComponent,
    EpmButtonComponent,
    RouterLink,
    ReactiveFormsModule,
    EpmErrorMessageComponent
  ],
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export default class NewPasswordComponent implements OnInit {
  isNewPasswordFormSubmitted = false;
  createNewPasswordForm!: FormGroup<NewPasswordForm>;

  readonly priorityErrors = ['samePasswordsValue'];
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly loginLink: string = `/${APP_ROUTER_NAME.Auth}/${APP_ROUTER_NAME.LogIn}`;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;

  get newPassword(): FormControl {
    return this.createNewPasswordForm.controls.newPassword;
  }
  get confirmNewPassword(): FormControl {
    return this.createNewPasswordForm.controls.confirmNewPassword;
  }

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.initCreateNewPasswordForm();
  }

  onSubmit(): void {
    // TODO prevent sending an empty form (onInit button is enabled by markup)

    // TODO do it on success response from BE
    this.isNewPasswordFormSubmitted = !this.isNewPasswordFormSubmitted;
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
        ]
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
