import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-booking-manager-dashboard',
  templateUrl: './booking-manager-dashboard.component.html',
  styleUrls: ['./booking-manager-dashboard.component.css']
})
export class BookingManagerDashboardComponent implements OnInit {

  constructor() { }

  title = 'angularbootstrap';
  ngOnInit() {
               //Toggle Click Function
   $("#menu-toggle").click(function(e) {
     e.preventDefault();
     $("#wrapper").toggleClass("toggled");
   });
 }
}
