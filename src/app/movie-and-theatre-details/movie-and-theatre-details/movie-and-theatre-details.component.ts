import { Router } from "@angular/router"
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TheatreAndMovieDetailService } from "../../services/theatre-and-movie-details.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingMovieTicketsComponent } from "src/app/booking-movie-tickets/booking-movie-tickets/booking-movie-tickets.component";

@Component({
  selector: 'app-movie-and-theatre-details',
  templateUrl: './movie-and-theatre-details.component.html',
  styleUrls: ['./movie-and-theatre-details.component.scss'],
})
export class MovieAndTheatreDetailsComponent implements OnInit {
   theatreDetails:any =[];
   getMoviesCurrentTiming:Date=new Date();

  constructor(private modalService: NgbModal,private theatreAndMovieDetailsService:TheatreAndMovieDetailService,private router:Router) {
      }

  ngOnInit(): void {
   this.getTicketDetail();
  }
  getTicketDetail(){
    this.theatreAndMovieDetailsService.getAllTheatreDetails().subscribe(details=>{
      this.theatreDetails = details.theatre;
     });
  }
  ToBookSeats(details:any,timetype:any,time:any,ticketdetails:any,moviename:any){
    let bookedseats:any = [];
    let ticketdetail:any = {};
    if(details){
      if(details.length >0)   {
        let seats: any[] = [];
        details.forEach((item1:any) => {
          if(timetype == 'show1_time'&&item1.show1_time == time){
            
            if(item1.show1_booked_seats.length>0){
              item1.show1_booked_seats = JSON.parse(item1.show1_booked_seats);
              item1.show1_booked_seats.forEach((item2:any) => {
                seats.push(item2);
              });
            }
            bookedseats = seats;
          }
          else if(timetype == 'show2_time'&&item1.show2_time == time){
            if(item1.show2_booked_seats.length>0){
              item1.show2_booked_seats = JSON.parse(item1.show2_booked_seats);
              item1.show2_booked_seats.forEach((item2:any) => {
                seats.push(item2);
              });
            }
            bookedseats = seats;
          }
          else if(timetype == 'show3_time'&&item1.show3_time == time){
            if(item1.show3_booked_seats.length>0){
              item1.show3_booked_seats = JSON.parse(item1.show3_booked_seats);
              item1.show3_booked_seats.forEach((item2:any) => {
                seats.push(item2);
              });
            }
            bookedseats = seats;      
          }
          else if(timetype == 'show4_time'&&item1.show4_time == time){
            if(item1.show4_booked_seats.length>0){
              item1.show4_booked_seats = JSON.parse(item1.show4_booked_seats);
              item1.show4_booked_seats.forEach((item2:any) => {
                seats.push(item2);
              });
            }
            bookedseats = seats;
          }
        });
      } 
    }
    ticketdetail = {"show_time":time, "movie_name":moviename, "theatre_name":ticketdetails.theatre_name, "booked_seats":bookedseats, "date":""}    
    const modalRef = this.modalService.open(BookingMovieTicketsComponent, { size: 'xl', backdrop: 'static',windowClass: 'modal-xl' });
    modalRef.componentInstance.bookedseats = ticketdetail;
    modalRef.result.then((data) => {
      this.getTicketDetail();
    }, (reason) => {
      this.getTicketDetail();
    });
  }
}