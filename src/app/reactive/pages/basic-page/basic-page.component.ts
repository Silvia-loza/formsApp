import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  //Manera alternativa de settear un formulario Reactivo
  // public myForm: FormGroup = new FormGroup({
  // name: new FormControl('', [], []),
  // price: new FormControl(0, [], []),
  // inStorage: new FormControl(0, [], []),
  // });

  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService
  ) {}
  ngOnInit() {}

  isValidField(field: keyof typeof this.myForm.controls): boolean | null {
    return this.validatorService.isValidField(this.myForm, field);
  }

  getFieldError(field: any): any {
    const control = this.myForm.get(field);
    if (!control) return null; // Control no encontrado
    const errors = control.errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }

      return null;
    }

    return control.errors || {};
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('My formulario valores ', this.myForm.value);
    this.myForm.reset();
  }
}
