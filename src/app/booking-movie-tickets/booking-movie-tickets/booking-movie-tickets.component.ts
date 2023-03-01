import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TheatreAndMovieDetailService } from "../../services/theatre-and-movie-details.service";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-booking-movie-tickets',
  templateUrl: './booking-movie-tickets.component.html',
  styleUrls: ['./booking-movie-tickets.component.scss']
})
export class BookingMovieTicketsComponent implements OnInit {
  seats:any =[];
  alreadyBookedSeats:any;
  @Input()
  bookedseats!: any;
  selectedMovieDateTime:any =[{show1_movie: "Love Today",show1_time:"9:30 AM"}]
  constructor(public activeModal:NgbActiveModal,private theatreAndMovieDetailsService:TheatreAndMovieDetailService,private datePipe: DatePipe) { 
     
  }

  ngOnInit(): void {
    for(let i=1;i<=100;i++){
      this.seats.push({'seatNo':i,'seatstatus':'available','checked':false})
    }
    if(this.bookedseats.booked_seats.length>0){
      //this.bookedseats.booked_seats = JSON.parse(this.bookedseats.booked_seats);
      this.seats.forEach((item1:any) => {
        this.bookedseats.booked_seats.forEach((item2:any) => {
         if(item1.seatNo===item2) {
            item1.seatstatus = "booked";
          }
        });
     }); 
    }
  }
  book(){
    let selectedseatsarr: any[] = [];
    let selectedseat = this.seats.filter( (item:any) => {
      return item.checked == true;
    });
    if(selectedseat.length > 0){
      selectedseat.forEach((item1:any,index:number) => {
        selectedseatsarr[index]=(item1.seatNo);
      });
    }
    this.bookedseats.booked_seats = selectedseatsarr;
    let date = new Date();
    this.bookedseats.date = this.datePipe.transform(date,"dd/MM/yyyy");
    this.theatreAndMovieDetailsService.confirmBooking(this.bookedseats).subscribe(details=>{
        this.activeModal.dismiss();
      });
  }

}
