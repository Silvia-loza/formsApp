import { Component } from '@angular/core';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  constructor() {
    console.log('BasicPageComponent loaded');
  }

  ngOnInit() {
    console.log('El componente se ha inicializado');
  }
}
