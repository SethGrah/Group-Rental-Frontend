import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  reservations:Array<any>=[];
  shown:boolean=false;
  reservation:any;

  constructor(service:CarsApiService,private router:Router) {
    this.service=service;
   }

  ngOnInit(): void {
  }
  
  searchDbById():void{
    this.service.findMyReservationsByReservationId(this.searchItem).subscribe(data=>{
      console.log(data.rId);
      this.reservation =data;
    })
  }
  isShown():void{
    this.shown=!this.shown;
  }
/**
 * It's a function that is called when a button is clicked. It calls another function that searches the
 * database for a reservation. If the reservation is found, it calls another function that shows the
 * reservation.
 */
  onClick():void{
      console.log("made ids"+this.searchItemEmail)
      this.searchDbById();
      if(this.reservation!=null|| this.reservation!=''){
      this.isShown();
    }
  }
  searchDbByEmail():void{
    this.service.findMyReservationsByEmail(this.searchItemEmail).subscribe(data=>{
      this.reservations=data;
    })
  }
/* A function that is called when the user clicks the button. It takes the value of the input field and
calls the searchDbByEmail function. It then calls the isShown function. */
  onClickEmail():void{
    console.log("made emails"+this.searchItem)
      this.searchDbByEmail();
      this.isShown();
  }
/**
 * It takes in a givenId, calls the deleteReservation function in the service, and then calls ngOnInit
 * to refresh the page.
 * @param {number} givenId - number
 */
  onDelete(givenId:number):void{
    console.log("made it to delete");
    this.service.deleteReservation(givenId).subscribe(data=>console.log(data));
    this.ngOnInit();
  }
}
