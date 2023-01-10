import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeS14Component } from './pages/home-s14/home-s14.component';
import { HomeS15Component } from './pages/home-s15/home-s15.component';

const routes: Routes = [
  {
    path: 'home-s14',
    component: HomeS14Component,
  },
  {
    path: 'home-s15',
    component: HomeS15Component,
  },
  {
    path: '**',
    redirectTo: 'home-s14',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
