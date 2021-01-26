import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  id: number;
  hotelName: string;
  booking: Booking=new Booking();
  submitted = false;
  
  Name:String;
  AvailRooms:number;
  constructor(private route: ActivatedRoute,private customerService:CustomerService,
    private router:Router) { }

  ngOnInit(){
    localStorage.setItem("firstName",this.hotelName);
  }
  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  save() {
    this.customerService.createBooking(this.booking).subscribe(data => {
      console.log(data)
      this.booking = new Booking();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/payment']);
  }
}

