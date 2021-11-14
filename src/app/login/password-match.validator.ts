import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export function passwordValidator(field: string, matchField: string): ValidatorFn {
  return (control: FormGroup): ValidationErrors | null => {
    return control.get(field).value !== control.get(matchField).value ? { fieldsDontMatch: true } : null;
  };
}
