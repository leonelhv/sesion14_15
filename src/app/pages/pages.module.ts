import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeS14Component } from './home-s14/home-s14.component';
import { HomeS15Component } from './home-s15/home-s15.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeS14Component, HomeS15Component],
  imports: [CommonModule, ComponentsModule, FormsModule, RouterModule],
  exports: [HomeS14Component, HomeS15Component],
})
export class PagesModule {}
