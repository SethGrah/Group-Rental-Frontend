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

  ngOnInit(): void {
    this.service.findAllCars().subscribe(data=>
      this.cars = data);
  }

}
