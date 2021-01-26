import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-booking-manager-login',
  templateUrl: './booking-manager-login.component.html',
  styleUrls: ['./booking-manager-login.component.css']
})
export class BookingManagerLoginComponent implements OnInit {


  username: string;
  password: string;
  message: any

  constructor(private service: HotelService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.service.bookingLogin(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
     this.router.navigate(["/booking-dash"])
    });
  }

}
