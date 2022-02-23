import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista1',
    loadChildren: () => import('./lista1/lista1-routing.module').then(m => m.Lista1RoutingModule)

  },
  {
    path: '',
    redirectTo: 'lista1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
