import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingMovieTicketsComponent } from './booking-movie-tickets/booking-movie-tickets.component';


const routes: Routes = [
  {
    path: '',
    component: BookingMovieTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingMovieTicketsRoutingModule { }