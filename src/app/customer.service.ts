import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl1 = 'http://localhost:8080/details/addCustomer';
  private baseUrl2 = 'http://localhost:8080/Bookings/booking';
  private baseUrl3 = 'http://localhost:8080/Bookings/findbooking';

  constructor(private http: HttpClient) { }
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`,customer);
  }
  createBooking(booking: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl2}`,booking);
  }
  getBookingDetailsById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl3}/${id}`);
  }
}
