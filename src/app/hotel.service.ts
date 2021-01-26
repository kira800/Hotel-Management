import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  

  // USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  // public username: String;
  // public password: String;

  constructor(private http:HttpClient) { }
  login(username:string,password:string){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("http://localhost:8080/admin-login",{headers,responseType: 'text' as 'json'})
    }

  bookingLogin(username:string,password:string){
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get("http://localhost:8080/booking-login",{headers,responseType: 'text' as 'json'})
      }
 
}
