import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  reservations:Array<any>=[];
  shown:boolean=false;
  reservation:any;
  //private messageService: MessageService
  constructor(service:CarsApiService,) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  
  searchDbById():void{
    this.service.findMyReservationsByReservationId(this.searchItem).subscribe(data=>{
      console.log(data);
      this.reservation =data;
    })
  }
  isShown():void{
    this.shown=!this.shown;
  }
  onClick():void{
      console.log("made ids"+this.searchItemEmail)
      if(this.searchItem==null||this.searchItem<=0){
        // this.messageService.add
      }
      this.searchDbById();
      if(this.reservation!=null|| this.reservation!=''){
      this.isShown();
    }else{
    }

  }
  searchDbByEmail():void{
    this.service.findMyReservationsByEmail(this.searchItemEmail).subscribe(data=>{
      this.reservations=data;
    })
  }
  onClickEmail():void{
    console.log("made emails"+this.searchItem)
      this.searchDbByEmail();
      this.isShown();
  }
}
