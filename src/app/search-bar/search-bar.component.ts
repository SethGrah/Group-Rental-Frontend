import { Component, Inject, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsApiService } from '../cars-api.service';
import { Car } from '../models/car';
import { DatePipe } from '@angular/common';
import { reservationSearch } from '../models/reservationSearch';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { reservation } from '../models/reservation';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  

  emailRegex =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
 
  service: CarsApiService;
  reservationSearchForm;
  search: reservationSearch=new reservationSearch(0,'','');
  shown:boolean = false;
  minDate = new Date();

  @Input() availCars : Array<any>=[]
  selectedCar:any;
  constructor( service: CarsApiService,public datepipe:DatePipe,private formBuilder:FormBuilder,public dialog:MatDialog) {
    this.reservationSearchForm=formBuilder.group({
      'capacity':[0,Validators.required],
      'startDate':['',Validators.required],
      'endDate':['',Validators.required]
    }
    
    )
    this.service = service;

  }


  ngOnInit(): void {

  }
  onSubmit(): void {

    this.search.capacity= this.reservationSearchForm.controls.capacity.value;
    this.search.startDate = this.datepipe.transform(this.reservationSearchForm.controls.startDate.value,'yyyyMMdd');
    this.search.endDate= this.datepipe.transform(this.reservationSearchForm.controls.endDate.value,'yyyyMMdd');
  
    console.log(this.search.startDate)

    this.service.findAvailableReservations(this.search).subscribe(data=>{
      console.log(data);
      this.availCars=data;
    })
    this.shown=!this.shown
  }

  openDialog():void{
    console.log(this.selectedCar)
    const dialogRef = this.dialog.open(myModal, {
      width: '250px',
      data: {car:this.selectedCar,email:'', rStart:this.search.startDate,rEnd:this.search.endDate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        
    });
  }

  }




  //////////////////////////////
  @Component({
    selector: 'res-save-modal',
    templateUrl: 'res-save-modal.html',
  })
  export class myModal{
  
    service: CarsApiService;
    userId: any;
    resSave:any;
    constructor(
      public dialogRef: MatDialogRef<myModal>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
       private router : Router, service: CarsApiService) {
        this.service=service;
       }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    onSave():void{
      console.log(this.data.email);


      //USE THIS ASYNC/WAIT with promises
      this.service.findUserByEmail(this.data.email).subscribe(data=>{
        console.log(data);
        this.userId=data.id.value;
      })
      console.log("hi"+this.userId);
      if (this.userId!=null || this.userId!=undefined){
      this.resSave= new reservation(this.data.car.license,this.data.email,this.data.rStart,this.data.rEnd);
      this.service.saveNewReservation(this.resSave).subscribe(stored=>{
        console.log(stored);
      })
      this.router.navigateByUrl('/homes');
      this.dialogRef.close();
    }
    else{
      this.router.navigateByUrl('/homes')
      console.log('null user')
    }
    }
  }
  export interface DialogData {
    car:any;
    email: string;
    rStart:Date;
    rEnd:Date;
  }
