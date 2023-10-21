import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { CustomError } from './custom.validators.model';
import { REGEXP_PATTERNS } from '../../app.config';
import { addErrors, removeErrors } from '../utils/utils';
import { NewPasswordForm } from "../../auth/auth.model";

export class CustomValidators {
  static password(): ValidatorFn {
    return (control: AbstractControl): CustomError | null => {
      const value = control.value;

      const validationMismatches: CustomError = {
        passwordAllowedCharacters: !REGEXP_PATTERNS.passwordAllowedCharacters.test(value),
        passwordHasUpperCase: !REGEXP_PATTERNS.hasUpperCase.test(value),
        passwordHasLowerCase: !REGEXP_PATTERNS.hasLowerCase.test(value),
        passwordHasNumeric: !REGEXP_PATTERNS.hasNumeric.test(value),
        passwordHasNonAlphaNumeric: !REGEXP_PATTERNS.hasNonAlphaNumeric.test(value),
        passwordWithoutSpace: REGEXP_PATTERNS.hasSpace.test(value)
      };

      const firstErrorName: string | undefined = Object.keys(validationMismatches).find(
        key => validationMismatches[key]
      );

      return firstErrorName ? { [firstErrorName]: true } : null;
    };
  }

  static sameConfirmPassword(): ValidatorFn {
    return (formGroup: AbstractControl): CustomError | null => {
      const form: FormGroup<NewPasswordForm> = formGroup as FormGroup<NewPasswordForm>;
      const newPassword: FormControl<string> = form.controls.newPassword;
      const confirmNewPassword: FormControl<string> = form.controls.confirmNewPassword;

      if (!confirmNewPassword.value) return null;

      if (newPassword.value !== confirmNewPassword.value) {
        addErrors(form.controls.newPassword, { sameConfirmPassword: true });
        addErrors(form.controls.confirmNewPassword, { sameConfirmPassword: true });
      } else {
        removeErrors(newPassword, ['sameConfirmPassword']);
        removeErrors(confirmNewPassword, ['sameConfirmPassword']);
      }
      return null;
    };
  }
}
