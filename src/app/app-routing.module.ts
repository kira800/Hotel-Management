import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HotelRoomsComponent } from './admin-dashboard/hotel-rooms/hotel-rooms.component';
import { RoomTypesComponent } from './admin-dashboard/room-types/room-types.component';
import { AvailableRoomsComponent } from './booking-manager-dashboard/available-rooms/available-rooms.component';
import { BookingHistoryComponent } from './booking-manager-dashboard/booking-history/booking-history.component';
import { BookingManagerDashboardComponent } from './booking-manager-dashboard/booking-manager-dashboard.component';
import { BookingsComponent } from './booking-manager-dashboard/bookings/bookings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { BookingManagerLoginComponent } from './login/booking-manager-login/booking-manager-login.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'login',component: LoginComponent},
  {path: 'admin-login',component: AdminLoginComponent},
  {path: 'booking-login',component: BookingManagerLoginComponent},
  {path: 'admin-dash', component: AdminDashboardComponent},
  {path: 'logout', component: HomePageComponent},
  {path: 'booking-dash', component: BookingManagerDashboardComponent},
  {path: 'hotel-rooms', component: HotelRoomsComponent},
  {path: 'room-types', component: RoomTypesComponent},
  {path: 'available-rooms', component: AvailableRoomsComponent},
  {path: 'booking-history', component: BookingHistoryComponent},
  {path: 'booking', component: BookingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
