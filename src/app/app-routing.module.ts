import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:"",loadChildren:()=> import('./movie-and-theatre-details/movie-and-theatre-details.module').then(m=>m.MovieAndTheatreDetailsModule)
  },
  {
    path:"book",loadChildren:()=> import('./booking-movie-tickets/booking-movie-tickets.module').then(m=>m.BookingMovieTicketsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
