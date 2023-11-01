import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { ChangePasswordForm } from '../../main.model';
import { APP_ROUTER_NAME, BUTTON_THEMES, INPUT_TYPES } from '../../../app.config';
import { CustomValidators } from '../../../shared/validators/custom.validators';
import { PASSWORDS_TO_COMPARE } from '../../../auth/auth.config';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';

@Component({
  selector: 'epm-change-password',
  standalone: true,
  imports: [
    CommonModule,
    EpmButtonComponent,
    EpmInputComponent,
    RouterLink,
    ReactiveFormsModule,
    EpmErrorMessageComponent
  ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export default class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup<ChangePasswordForm>;

  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;

  get currentPassword(): FormControl {
    return this.changePasswordForm.get('currentPassword') as FormControl;
  }

  get newPassword(): FormControl {
    return this.changePasswordForm.get('newPassword') as FormControl;
  }

  get confirmNewPassword(): FormControl {
    return this.changePasswordForm.get('confirmNewPassword') as FormControl;
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initChangePasswordForm();
  }

  onSavePassword(): void {
    // TODO add submit change password logic

    this.router.navigateByUrl(`/${this.appRoutes.Main}/${this.appRoutes.ProfileSettings}`);
  }

  private initChangePasswordForm(): void {
    this.changePasswordForm = this.fb.group<ChangePasswordForm>(
      {
        currentPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required]
        }),
        newPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(8), CustomValidators.password()]
        }),
        confirmNewPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required]
        })
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
