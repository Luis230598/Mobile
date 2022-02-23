import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lista1 } from './lista1.component';

const routes: Routes = [
  {
    path: '',
    component: Lista1,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lista1RoutingModule {}
