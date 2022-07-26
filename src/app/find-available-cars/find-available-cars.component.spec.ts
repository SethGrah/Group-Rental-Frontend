import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAvailableCarsComponent } from './find-available-cars.component';

describe('FindAvailableCarsComponent', () => {
  let component: FindAvailableCarsComponent;
  let fixture: ComponentFixture<FindAvailableCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAvailableCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAvailableCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
