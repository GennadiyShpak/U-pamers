import { Component, OnInit, ViewChild, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { APP_ROUTER_NAME, BUTTON_THEMES, INPUT_PLACEHOLDERS, INPUT_TYPES } from '../../../app.config';
import { CustomValidators } from '../../../shared/validators/custom.validators';
import { NewPasswordForm } from '../../auth.model';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';
import { PASSWORDS_TO_COMPARE } from '../../auth.config';
import { CognitoService } from 'src/app/services/cognito.service';
import { PasswordSavedComponent } from '../../components/password-saved/password-saved.component';

@Component({
  selector: 'epm-new-password',
  standalone: true,
  imports: [
    CommonModule,
    EpmInputComponent,
    EpmButtonComponent,
    RouterLink,
    ReactiveFormsModule,
    EpmErrorMessageComponent,
    PasswordSavedComponent
  ],
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export default class NewPasswordComponent implements OnInit {
  @ViewChild('codeRef') codeInputRef!: EpmInputComponent;

  isCodeSubmitted = false;
  isNewPasswordSubmited = false;
  createNewPasswordForm!: FormGroup<NewPasswordForm>;

  readonly priorityErrors = ['samePasswordsValue'];
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;
  readonly inputPlaceholders: typeof INPUT_PLACEHOLDERS = INPUT_PLACEHOLDERS;

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
    private router: Router,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.initCreateNewPasswordForm();
    this.initSpyOnCodeValueChanges();
  }

  onCodeSubmit(): void {
    this.isCodeSubmitted = true;
  }

  onNewPasswordSubmit(): void {
    const { email, code, newPassword } = this.createNewPasswordForm.value;
    this.cognitoService
      .forgotPasswordSubmit(email!, code!, newPassword!)
      .pipe(
        tap(() => {
          this.isCodeSubmitted = true;
        }),
        take(1),
        catchError(() => this.router.navigateByUrl(`/${APP_ROUTER_NAME.NotFound}`))
      )
      .subscribe();
  }

  private initCreateNewPasswordForm(): void {
    this.createNewPasswordForm = this.fb.group(
      {
        newPassword: ['', [Validators.required, Validators.minLength(8), CustomValidators.password()]],
        confirmNewPassword: ['', [Validators.required]],

        code: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]]
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

  private initSpyOnCodeValueChanges(): void {
    this.code.valueChanges
      .pipe(
        tap(value => {
          const input = this.codeInputRef!.epmInputRef.nativeElement as HTMLInputElement;
          const cursorPosition = input.selectionStart;

          let maskedNumbersValue = value.replace(/\D/g, '').padEnd(6, '_').slice(0, 6);
          maskedNumbersValue = maskedNumbersValue === '______' ? '' : maskedNumbersValue;

          const enteredCharacterIsNumeric = /\d/.test(value.charAt(cursorPosition! - 1));

          this.code.setValue(maskedNumbersValue, { emitEvent: false });

          if (enteredCharacterIsNumeric) {
            input.setSelectionRange(cursorPosition, cursorPosition);
          } else {
            input.setSelectionRange(cursorPosition! - 1, cursorPosition! - 1);
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
