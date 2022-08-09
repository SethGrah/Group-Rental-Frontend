import { Component, OnInit } from '@angular/core';
import { CarsApiService } from '../cars-api.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  cars:Array<any>=[];
  service:CarsApiService
  constructor(service: CarsApiService) { 
    this.service=service;
   
  }

/**
 * The function is called when the component is initialized. It calls the service's findAllCars()
 * function, which returns an Observable. The subscribe() function is called on the Observable, which
 * takes a callback function as a parameter. The callback function takes the data returned by the
 * Observable and assigns it to the cars property of the component.
 */
  ngOnInit(): void {
    this.service.findAllCars().subscribe(data=>
      this.cars = data);
  }

}
