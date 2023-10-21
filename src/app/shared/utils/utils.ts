import { AbstractControl } from '@angular/forms';

export function addErrors(control: AbstractControl, errors: { [key: string]: any }): void {
  if (!control || !errors) {
    return;
  }
  control.setErrors({ ...(control.errors ? control.errors : {}), ...errors });
}

export function removeErrors(control: AbstractControl, keys: string[]): void {
  if (!control || !keys || keys.length === 0) {
    return;
  }
  const remainingErrors: { [key: string]: any } = keys.reduce(
    (errors: { [key: string]: any }, key: string) => {
      const { [key]: _, ...reducedErrors } = errors!;
      return reducedErrors;
    },
    { ...control.errors }
  );
  control.setErrors(Object.keys(remainingErrors).length ? remainingErrors : null);
}
