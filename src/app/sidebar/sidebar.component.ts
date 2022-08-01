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
  responsiveOptions;
  constructor(service: CarsApiService) { 
    this.service=service;
    this.responsiveOptions=[
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
    ]
  }

  ngOnInit(): void {
    this.service.findAllCars().subscribe(data=>
      this.cars = data);
  }

}
