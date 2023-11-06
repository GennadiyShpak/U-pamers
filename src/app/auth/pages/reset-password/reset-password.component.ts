import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';
import { BUTTON_THEMES } from '../../../app.config';

@Component({
  selector: 'epm-reset-password',
  standalone: true,
  imports: [CommonModule, EpmInputComponent, EpmButtonComponent, EpmErrorMessageComponent, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export default class ResetPasswordComponent implements OnInit {
  email!: string;
  isResetFormSubmitted = false;
  emailControl!: FormControl<string>;

  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

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
    this.isResetFormSubmitted = !this.isResetFormSubmitted;
  }
}
