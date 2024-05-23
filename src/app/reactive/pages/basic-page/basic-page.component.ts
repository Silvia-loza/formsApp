import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    name: ['', [], []],
    price: [0, [], []],
    inStorage: [0, [], []],
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    console.log('El componente se ha inicializado');
  }

  onSave(): void {
    console.log('My formulario valores ', this.myForm.value);
  }
}
