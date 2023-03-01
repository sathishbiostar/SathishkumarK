import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAndTheatreDetailsComponent } from './movie-and-theatre-details.component';

describe('MovieAndTheatreDetailsComponent', () => {
  let component: MovieAndTheatreDetailsComponent;
  let fixture: ComponentFixture<MovieAndTheatreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAndTheatreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieAndTheatreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
