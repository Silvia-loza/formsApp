import { Component } from '@angular/core';
import { ValidatorsService } from '../../../shared/services/validators.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      ['Metal Gear', 'Death Stranding', 'Gears of War', 'Horizon Zero Dawn'],
      Validators.required
    ),
  });

  public newFavouriteGame: FormControl = new FormControl(
    '',
    Validators.required
  );
  constructor(
    private fb: FormBuilder,
    private ValidatorsService: ValidatorsService
  ) {}

  get favouriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
  isValidField(field: keyof typeof this.myForm.controls): boolean | null {
    return this.ValidatorsService.isValidField(this.myForm, field);
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

  isValidFieldInArray(formArray: FormArray, i: number): boolean {
    const formArrayInFUn = formArray;
    const controlName = formArrayInFUn.at(i);
    console.log('1. Control', controlName);
    const controlErrors = this.myForm.controls['favoriteGames'].errors;
    let isValid = !(
      controlErrors && this.myForm.controls['favoriteGames'].touched
    );

    if (!isValid) {
      isValid = false;
    }
    return isValid;
  }
  onAddToFavourites(): void {
    if (this.newFavouriteGame.invalid) return;
    this.favouriteGames.push(
      this.fb.control(this.newFavouriteGame.value, Validators.required)
    );
    this.newFavouriteGame.reset();
  }
  onDeleteFavourtieGame(i: number) {
    this.favouriteGames.removeAt(i);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Mis datos de formulario enviados ', this.myForm.value);
    this.myForm.reset();
  }
}
