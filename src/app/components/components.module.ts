import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoS14Component } from './hijo-s14/hijo-s14.component';
import { S14AsincronaHijoComponent } from './s14-asincrona-hijo/s14-asincrona-hijo.component';
import { TablaComponent } from './tabla/tabla.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    HijoS14Component,
    S14AsincronaHijoComponent,
    TablaComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, RouterModule, SweetAlert2Module.forRoot()],
  exports: [
    HijoS14Component,
    S14AsincronaHijoComponent,
    TablaComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
