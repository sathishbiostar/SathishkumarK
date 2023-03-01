import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMovieTicketsComponent } from './booking-movie-tickets.component';

describe('BookingMovieTicketsComponent', () => {
  let component: BookingMovieTicketsComponent;
  let fixture: ComponentFixture<BookingMovieTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingMovieTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingMovieTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
