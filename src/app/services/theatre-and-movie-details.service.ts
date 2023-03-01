import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {BookingFormat } from "../models/booking-format"
@Injectable({
    "providedIn":"root"
})

export class TheatreAndMovieDetailService {
    public bookedSeats:any=[];
    constructor(private http:HttpClient){
       
    }
    getAllTheatreDetails(): Observable<any> {
        const url = "getAllDetails";
        return this.http.post<any>(url,{observe: 'body'});
      }
    confirmBooking(bookSeat:BookingFormat): Observable<any> {
        const url = "bookSeats";
        return this.http.post<any>(url, bookSeat);
      }
}