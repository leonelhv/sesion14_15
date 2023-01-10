import { Component } from '@angular/core';
import { enlace } from '../interfaces/enlace.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  enlaces: enlace[] = [
    {
      path: '/home-s14',
      text: 'S14',
    },
    {
      path: '/s14-asincrona',
      text: 'S14-Asincrona',
    },
    {
      path: '/home-s15',
      text: 'S15',
    },
    {
      path: '/s15-asincrona',
      text: 'S15-Asincrona',
    },
  ];
}
