import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CarsApiService } from '../cars-api.service';
import { reservation } from '../models/reservation';

@Component({
  selector: 'app-search-your-reservations',
  templateUrl: './search-your-reservations.component.html',
  styleUrls: ['./search-your-reservations.component.css']
})
export class SearchYourReservationsComponent implements OnInit {

  service: CarsApiService;
  searchItem:any;
  searchItemEmail:any;
  //{rId:1,license:"AAA-111",uId:1,r_start:"",r_end:""}
  reservations:reservation[]=[];
  shown:boolean=false;
  reservation:any;
  constructor(service:CarsApiService) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  searchDbByEmail():void{
    this.service.findMyReservationsByEmail(this.searchItem).subscribe(data=>{
      this.reservation=data;
    })
  }
  searchDbById():void{
    this.service.findMyReservationsByUserId(this.searchItem).subscribe(data=>{
      console.log(data);
      this.reservations =data;
    })
  }
  isShown():void{
    this.shown=!this.shown;
  }
  onClick():void{
    console.log("madeithere"+this.searchItem)
    if(this.searchItem!="" && this.searchItem!=null){
      this.service.findMyReservationsByUserId(this.searchItem).subscribe(data=>{
        this.reservations=data;
      });
      this.isShown();
    }
  }
  onClickEmail():void{
    console.log("madeithere"+this.searchItem)
    if(this.searchItemEmail!="" && this.searchItemEmail!=null){
    //   if(this.searchItem instanceof String){
    //   this.searchDbByEmail();
    //   this.isShown();}
    // }else{
      this.service.findMyReservationsByEmail({"email":this.searchDbByEmail}).subscribe(data=>{
        this.reservations=data;
      });
      this.isShown();
    }
  }
}
