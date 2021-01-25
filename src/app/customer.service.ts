import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/hotel-management/api/v1/customers';

  constructor(private http: HttpClient) { }
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,customer);
  }
}
