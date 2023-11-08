import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';
import { BUTTON_THEMES } from '../../../app.config';
import { CognitoService } from '../../../services/cognito.service';
import { LinkToNewPasswordComponent } from '../../components/link-to-new-password/link-to-new-password.component';

@Component({
  selector: 'epm-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    EpmInputComponent,
    EpmButtonComponent,
    EpmErrorMessageComponent,
    ReactiveFormsModule,
    LinkToNewPasswordComponent
  ],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export default class ResetPasswordComponent implements OnInit {
  email!: string;
  isResetFormSubmitted = false;
  emailControl!: FormControl<string>;

  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

  constructor(private cognitoService: CognitoService) {}

  ngOnInit(): void {
    this.initFormControl();
  }

  private initFormControl(): void {
    this.emailControl = new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    });
  }

  onSubmit(): void {
    this.email = this.emailControl.value;
    this.cognitoService
      .forgotPassword(this.email)
      .pipe(tap(() => (this.isResetFormSubmitted = true)))
      .subscribe();
  }
}
