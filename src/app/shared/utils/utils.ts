import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomError } from '../validators/custom.validators.model';

export function addErrors(control: AbstractControl, errors: CustomError): void {
  if (!control || !errors) {
    return;
  }

  const errorsToSet: ValidationErrors = control.errors ? { ...control.errors, ...errors } : errors;

  control.setErrors(errorsToSet);
}

export function removeErrors(control: AbstractControl, keys: string[]): void {
  if (!control || !keys || !keys.length) {
    return;
  }

  const remainingErrors: ValidationErrors = { ...control.errors };
  keys.forEach(errorNameToRemove => {
    delete remainingErrors[errorNameToRemove];
  });

  const errorsToSet: ValidationErrors | null = Object.keys(remainingErrors).length ? remainingErrors : null;

  control.setErrors(errorsToSet);
}
