import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieAndTheatreDetailsComponent } from './movie-and-theatre-details/movie-and-theatre-details.component';


const routes: Routes = [
  {
    path: '',
    component: MovieAndTheatreDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieAndTheatreDetailsRoutingModule { }