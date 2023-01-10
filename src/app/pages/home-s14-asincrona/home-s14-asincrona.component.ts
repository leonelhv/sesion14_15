import { Component } from '@angular/core';

@Component({
  selector: 'app-home-s14-asincrona',
  templateUrl: './home-s14-asincrona.component.html',
  styleUrls: ['./home-s14-asincrona.component.css'],
})
export class HomeS14AsincronaComponent {
  nombre: string = '';
  dni: string = '';
  estado_civil: string = '';
  objPersona = {
    nombre: '',
    dni: '',
    estado_civil: '',
  };
  enviarPersona() {
    this.objPersona = {
      nombre: this.nombre,
      dni: this.dni,
      estado_civil: this.estado_civil,
    };
  }
}
