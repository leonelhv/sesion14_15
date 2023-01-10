import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-s14',
  templateUrl: './hijo-s14.component.html',
  styleUrls: ['./hijo-s14.component.css'],
})
export class HijoS14Component {
  @Input() texto!: string;
}
