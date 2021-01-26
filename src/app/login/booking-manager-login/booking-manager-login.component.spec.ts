import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingManagerLoginComponent } from './booking-manager-login.component';

describe('BookingManagerLoginComponent', () => {
  let component: BookingManagerLoginComponent;
  let fixture: ComponentFixture<BookingManagerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingManagerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
