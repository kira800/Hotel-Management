import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../booking';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  
  @Input() childPost: any[]=[];
  
  bookings: Observable<Booking>;
  id:27;
  customer: Customer 
  booking: Booking
  sessionValue:string ="";
  constructor(private route: ActivatedRoute,private router: Router,
    public customerService:CustomerService) { }

 
  ngOnInit(): void {
    this.sessionValue=sessionStorage.getItem("hotelName");
    this.customerService.getBookingDetailsById(1);
    
  //  this.customer=new Customer();
  //  this.id=this.route.snapshot.params['id'];
  //  this.customerService.getBookingDetailsById(this.id).subscribe(data => {
  //    this.customer=data;
  //  },error => console.log(error));

  //  this.booking=new Booking();
  //  this.id=this.route.snapshot.params['id'];
  //  this.customerService.getBookingDetailsById(this.id).subscribe(data => {
  //    this.booking=data;
  //  },error => console.log(error));
  } 

}