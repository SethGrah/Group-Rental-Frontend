import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarsApiService } from '../cars-api.service';
import { Car } from '../models/car';
import { DatePipe } from '@angular/common';
import { reservationSearch } from '../models/reservationSearch';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  service: CarsApiService;
  reservationSearch: reservationSearch=new reservationSearch(0,new Date,new Date);
  shown:boolean = false;
  @Input() availCars : Array<any>=[]
  constructor( service: CarsApiService,public datepipe:DatePipe) {
    this.service = service;
    
  }

  ngOnInit(): void {
    this.reservationSearch.size=0;
    this.reservationSearch.startDate=new Date();
    this.reservationSearch.endDate =new Date();
  }
  onSubmit(): void {
    const start=  this.datepipe.transform(this.reservationSearch.startDate,"yyyyMMdd");
    console.log(start)

    console.log("Searching..." + this.reservationSearch.startDate);

    this.service.findAvailableReservations(reservationSearch).subscribe(data=>{
      console.log(data);
      this.availCars=data;
    })
    this.shown=!this.shown
  }
}
