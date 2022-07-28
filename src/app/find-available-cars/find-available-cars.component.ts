import { Component, Input, OnInit } from '@angular/core';
import { CarsApiService } from '../cars-api.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-find-available-cars',
  templateUrl: './find-available-cars.component.html',
  styleUrls: ['./find-available-cars.component.css']
})
export class FindAvailableCarsComponent implements OnInit {
  service:CarsApiService;
  @Input() availableCars:Array<any>=[{}];
  constructor(service: CarsApiService) {
    this.service=service;
   }

  ngOnInit(): void {
    // this.service.findAvailableReservations().subscribe(data=>{
    //   this.currStorage = data;
    // })
  }

}
