import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { CustomError } from './custom.validators.model';
import { REGEXP_PATTERNS } from '../../app.config';
import { addErrors, removeErrors } from '../utils/utils';

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

  static matchControlsValue(errorName: string, primaryControlName: string, controlNameToCompare: string): ValidatorFn {
    return (formGroup: AbstractControl): CustomError | null => {
      const form: FormGroup = formGroup as FormGroup;
      const primaryControl: FormControl<string> = form.controls[primaryControlName] as FormControl<string>;
      const controlToCompare: FormControl<string> = form.controls[controlNameToCompare] as FormControl<string>;

      if (!controlToCompare.value) return null;

      if (primaryControl.value !== controlToCompare.value) {
        addErrors(primaryControl, { [errorName]: true });
        addErrors(controlToCompare, { [errorName]: true });
      } else {
        removeErrors(primaryControl, [errorName]);
        removeErrors(controlToCompare, [errorName]);
      }
      return null;
    };
  }
}