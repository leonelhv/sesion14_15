import { Component } from '@angular/core';

@Component({
  selector: 'app-home-s15',
  templateUrl: './home-s15.component.html',
  styleUrls: ['./home-s15.component.css'],
})
export class HomeS15Component {
  titulo = 'Data Binding Interpolation';
  isVisible = true;
  textLarge =
    'El Fvo-way data bindtng en Angular nos pennite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificarnos el valor de una propiedad en la vista el valor tarnbién se actualiza en el modelo de datos.';

  onVisible() {
    this.isVisible = !this.isVisible;
  }
}
