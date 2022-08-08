import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsApiService } from '../cars-api.service';
import { reservation } from '../models/reservation';
import {updateRes} from '../models/updateRes';
@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {
  service:CarsApiService;
  resUpdate:reservation=new reservation('',1,new Date,new Date);
  resSubmit:updateRes=new updateRes(1,'',1,'','')
  rId:number=0;
  date:any;
  constructor(service: CarsApiService,private route: ActivatedRoute,public datepipe:DatePipe) {
    this.service=service;
   }

  ngOnInit(): void {
    let date= new Date;
    this.route.queryParams.subscribe(params=>{
      this.rId=params['resId'];
      this.service.findMyReservationsByReservationId(this.rId).subscribe(data=>{
        console.log(data);
        this.resUpdate=data})
      
    })
  }
  onSubmit():void{
    this.resSubmit.rStart= this.datepipe.transform(this.resUpdate.rStart,"yyyyMMdd")
    this.resSubmit.rEnd= this.datepipe.transform(this.resUpdate.rEnd,"yyyyMMdd")
    this.service.updateReservation(this.resSubmit).subscribe(stored=>{
      console.log(stored);
    })
  }
}
