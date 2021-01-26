import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingManagerDashboardComponent } from './booking-manager-dashboard.component';

describe('BookingManagerDashboardComponent', () => {
  let component: BookingManagerDashboardComponent;
  let fixture: ComponentFixture<BookingManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
