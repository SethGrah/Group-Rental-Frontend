import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchYourReservationsComponent } from './search-your-reservations.component';

describe('SearchYourReservationsComponent', () => {
  let component: SearchYourReservationsComponent;
  let fixture: ComponentFixture<SearchYourReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchYourReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchYourReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
