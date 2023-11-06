import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { BUTTON_THEMES } from '../../../app.config';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { EpmErrorMessageComponent } from '../../../shared/components/epm-error-message/epm-error-message.component';

@Component({
  selector: 'epm-reset-password',
  standalone: true,
  imports: [CommonModule, EpmInputComponent, EpmButtonComponent, EpmErrorMessageComponent, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export default class ResetPasswordComponent {
  email!: string;
  isResetFormSubmitted = false;
  emailControl: FormControl<string> = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  });
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

  onSubmit(): void {
    console.log(this.emailControl.value);
    this.email = this.emailControl.value;
    this.isResetFormSubmitted = !this.isResetFormSubmitted;
  }
}
