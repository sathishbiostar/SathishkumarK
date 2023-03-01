import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingMovieTicketsComponent } from './booking-movie-tickets/booking-movie-tickets.component';
import {BookingMovieTicketsRoutingModule } from "./booking-movie-tickets-routing.module"
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    BookingMovieTicketsComponent
  ],
  imports: [
    CommonModule,
    BookingMovieTicketsRoutingModule
  ],
  providers: [DatePipe]

})
export class BookingMovieTicketsModule { }
