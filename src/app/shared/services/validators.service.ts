import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(private fb: FormBuilder) {}

  public cantBeStrider = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }

    return null;
  };

  public isValidField(
    myForm: FormGroup,
    field: keyof typeof myForm.controls
    //string?
  ): boolean | null {
    return (
      myForm.controls[field].errors &&
      myForm.controls[field] &&
      myForm.controls[field].touched
    );
  }

  public isFiledOneEqualToFieldTwo(fieldOne: string, fieldTwo: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const fieldOneValue = formGroup.controls[fieldOne]?.value || '';
      const fieldTwoValue = formGroup.controls[fieldTwo]?.value || '';
      if (fieldOneValue !== fieldTwoValue) {
        formGroup.get(fieldTwo)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    };
  }
}
