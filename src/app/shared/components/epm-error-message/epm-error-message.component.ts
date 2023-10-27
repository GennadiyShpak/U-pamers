import { AfterContentChecked, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from '../../../app.config';

@Component({
  selector: 'epm-error-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './epm-error-message.component.html',
  styleUrls: ['./epm-error-message.component.scss']
})
export class EpmErrorMessageComponent implements AfterContentChecked {
  @Input({ required: true }) control!: FormControl;
  @Input() priorityErrors: string[] = [];

  errorMessages: typeof ERROR_MESSAGES = ERROR_MESSAGES;
  errorMessageKey!: keyof typeof ERROR_MESSAGES;

  ngAfterContentChecked(): void {
    if (this.control.errors) {
      this.getErrorMessage(this.control.errors, this.priorityErrors);
    }
  }

  private getErrorMessage(allErrors: ValidationErrors, errorsPriority: string[]): void {
    if (!allErrors) {
      return;
    }

    if (errorsPriority && errorsPriority.length) {
      const errorName: string | undefined = errorsPriority.find(error => allErrors[error]);
      this.errorMessageKey = (
        errorName ? errorName : Object.keys(this.control.errors as object).at(0)
      ) as keyof typeof ERROR_MESSAGES;
    } else {
      [this.errorMessageKey] = Object.keys(this.control.errors!) as (keyof typeof ERROR_MESSAGES)[];
    }
  }
}
