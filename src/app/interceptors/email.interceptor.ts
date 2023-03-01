import { Injectable} from "@angular/core";
import {
    HttpInterceptor,
    HttpHandler,
    HttpResponse,
    HttpRequest,
    HttpEvent
  } from "@angular/common/http";
  import { Observable } from "rxjs";
@Injectable()

export class EmailInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        const BASE_URL = "https://zincubate.in/api/MovieTicketChecker?action=" + req.url;
        if (req.url.includes("bookSeats")) {
          const request = req.clone({url:BASE_URL,body:{...req.body,"user_mail_id":"sample@gmail.com"}});
          return next.handle(request);
        } else {
          const request = req.clone({url:BASE_URL,body:{"user_mail_id":"sample@gmail.com"}});
          return next.handle(request);
        }   
      }
}