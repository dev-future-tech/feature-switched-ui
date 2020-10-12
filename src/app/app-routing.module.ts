import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetSearchComponent } from './pet-search/pet-search.component';

const routes: Routes = [
  { path: 'search', component: PetSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
