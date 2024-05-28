import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    username: [
      '',
      [Validators.required, Validators.minLength(3), cantBeStrider],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder) {
    console.log('Register page');
  }

  isValidField(field: string) {
    //obtener validacion desde servicio
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();

      console.log('My form invalid');
      return;
    }

    console.log('My form values', this.myForm.value);
  }
}
