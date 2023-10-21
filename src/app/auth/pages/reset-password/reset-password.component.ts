import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { BUTTON_THEMES } from '../../../app.config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'epm-reset-password',
  standalone: true,
  imports: [CommonModule, EpmInputComponent, EpmButtonComponent, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export default class ResetPasswordComponent {
  email!: string;
  isResetFormSubmitted = false;
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

  onSubmit(): void {
    this.isResetFormSubmitted = !this.isResetFormSubmitted;
  }
}
