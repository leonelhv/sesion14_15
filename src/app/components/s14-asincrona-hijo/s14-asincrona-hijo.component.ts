import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s14-asincrona-hijo',
  templateUrl: './s14-asincrona-hijo.component.html',
  styleUrls: ['./s14-asincrona-hijo.component.css'],
})
export class S14AsincronaHijoComponent {
  @Input() persona: any;
}
