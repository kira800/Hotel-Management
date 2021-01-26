import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../Booking';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookings: Observable<Booking>;
  constructor(private route: ActivatedRoute,private router: Router,
    private customerService:CustomerService) { }

  ngOnInit(): void {
   this.reloadData();
  }
  reloadData(){
 // this.bookings=this.customerService.getBookingDetailsById();
  }
}