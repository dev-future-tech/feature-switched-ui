import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetFoodComponent } from './pet-food/pet-food.component';
import { PetSearchComponent } from './pet-search/pet-search.component';

const routes: Routes = [
  { path: 'search', component: PetSearchComponent },
  { path: 'food', component: PetFoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
