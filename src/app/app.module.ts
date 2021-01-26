import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HotelService } from './hotel.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarDirective } from './sidebar.directive';
import { HotelRoomsComponent } from './admin-dashboard/hotel-rooms/hotel-rooms.component';
import { RoomTypesComponent } from './admin-dashboard/room-types/room-types.component';
import { BookingManagerDashboardComponent } from './booking-manager-dashboard/booking-manager-dashboard.component';
import { BookingsComponent } from './booking-manager-dashboard/bookings/bookings.component';
import { AvailableRoomsComponent } from './booking-manager-dashboard/available-rooms/available-rooms.component';
import { BookingHistoryComponent } from './booking-manager-dashboard/booking-history/booking-history.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { BookingManagerLoginComponent } from './login/booking-manager-login/booking-manager-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AdminDashboardComponent,
    SidebarDirective,
    HotelRoomsComponent,
    RoomTypesComponent,
    BookingManagerDashboardComponent,
    BookingsComponent,
    AvailableRoomsComponent,
    BookingHistoryComponent,
    AdminLoginComponent,
    BookingManagerLoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
