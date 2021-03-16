import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'vii',
    loadChildren: () => import('ff-vii/Module').then(m => m.CharactersModule)
  },
  {
    path: 'viii',
    loadChildren: () => import('ff-viii/Module').then(m => m.CharactersModule)
  },
  {
    path: 'ix',
    loadChildren: () => import('ff-ix/Module').then(m => m.CharactersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
