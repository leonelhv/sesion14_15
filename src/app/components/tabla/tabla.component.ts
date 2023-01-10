import { Component, EventEmitter, Input, Output } from '@angular/core';
import { usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  @Input() datos: usuario[] = [];

  @Output() onDeleteUser = new EventEmitter<number>();

  outIndexUsuario(index: number) {
    this.onDeleteUser.emit(index);
  }
  public saveFile(fileName: string): void {
    // ... save file
  }

  public handleDenial(): void {
    // ... don't save file and quit
  }

  public handleDismiss(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }
}
