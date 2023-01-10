import { Component } from '@angular/core';
import { usuario } from 'src/app/components/interfaces/usuario.interface';

@Component({
  selector: 'app-home-s15-asincrona',
  templateUrl: './home-s15-asincrona.component.html',
  styleUrls: ['./home-s15-asincrona.component.css'],
})
export class HomeS15AsincronaComponent {
  nombre: string = '';
  apellido: string = '';
  carrera: string = '';

  datos: usuario[] = [
    {
      nombre: 'Luis',
      apellido: 'Llanos',
      carrera: 'Ing.Sistemas',
    },
    {
      nombre: 'Jose',
      apellido: 'Perez',
      carrera: 'Ing.Redes',
    },
    {
      nombre: 'Pepe',
      apellido: 'López',
      carrera: 'Ing.Electrónico',
    },
  ];

  insertarDatos() {
    const objUsuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      carrera: this.carrera,
    };
    this.datos.push(objUsuario);
  }
  eliminarUsuario(index: number) {
    this.datos.splice(index, 1);
  }
}
