import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Mis datos de formulario enviados ', this.myForm.value);
    this.myForm.reset();
  }
}
