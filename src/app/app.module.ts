import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmailInterceptor } from "./interceptors/email.interceptor";
import { TheatreAndMovieDetailService } from "./services/theatre-and-movie-details.service";
import { BookingMovieTicketsModule } from "./booking-movie-tickets/booking-movie-tickets.module";
import { MovieAndTheatreDetailsModule } from "./movie-and-theatre-details/movie-and-theatre-details.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookingMovieTicketsModule,
    MovieAndTheatreDetailsModule,
    NgbModule
  ],
  providers: [TheatreAndMovieDetailService,{
    provide:HTTP_INTERCEPTORS,useClass:EmailInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
