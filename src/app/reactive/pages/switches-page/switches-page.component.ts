import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });
  constructor(private fb: FormBuilder) {}
  isValidField(field: keyof typeof this.myForm.controls): boolean | null {
    return (
      this.myForm.controls[field]?.errors &&
      this.myForm.controls[field] &&
      this.myForm.controls[field].touched
    );
  }
  onSave(): void {
    console.log('My form ONSAVE', this.myForm.value);
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log('My form values', this.myForm.value);
  }
}
