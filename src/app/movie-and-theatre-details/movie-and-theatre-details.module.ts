import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAndTheatreDetailsComponent } from './movie-and-theatre-details/movie-and-theatre-details.component';
import { MovieAndTheatreDetailsRoutingModule} from "./movie-and-theatre-details-routing.module";
@NgModule({
  declarations: [
    MovieAndTheatreDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieAndTheatreDetailsRoutingModule
  ],
  providers:[]
})
export class MovieAndTheatreDetailsModule { }
