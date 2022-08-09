import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsApiService } from '../cars-api.service';
import { reservation } from '../models/reservation';
import {updateRes} from '../models/updateRes';
import { NotificationsService } from '../notifications.service';
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
  resUpdateForm;
  minDate = new Date();
  constructor(service: CarsApiService,private route: ActivatedRoute,public datepipe:DatePipe, private fb : FormBuilder,private noService:NotificationsService,private router:Router) {
    this.service=service;
    this.resUpdateForm = fb.group({
      'startDate': ['', Validators.required],
      'endDate': ['', Validators.required]
    });

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
    this.resSubmit.rId=this.resUpdate.rId;
    this.resSubmit.car=this.resUpdate.car;
    this.resSubmit.user=this.resUpdate.user;
    this.resSubmit.rStart= this.datepipe.transform(this.resUpdateForm.controls.startDate.value,"yyyyMMdd")
    this.resSubmit.rEnd= this.datepipe.transform(this.resUpdateForm.controls.endDate.value,"yyyyMMdd")
    this.service.updateReservation(this.resSubmit).subscribe(stored=>{
      console.log(stored);
      this.noService.showSuccess("Reservation number:" + this.resSubmit.rId+ " updated!", "Success");
      this.router.navigateByUrl("/search-cars")
    }, (err)=> {this.noService.showError("Reservation could not be updated","Error")})
  }
}
