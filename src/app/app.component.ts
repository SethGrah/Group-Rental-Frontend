import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'rental-app';

  mediaSub:Subscription=new Subscription();
  
  deviceXs: boolean=false;
  constructor(public mediaObserver:MediaObserver){
  }
/* Subscribing to the mediaObserver and checking if the device is xs or not. */
  ngOnInit(): void {
    this.mediaSub=this.mediaObserver.asObservable().subscribe(
      (result:MediaChange[])=>{
        console.log(result[0].mqAlias)
        this.deviceXs= result[0].mqAlias === 'xs'? true:false;
      });
        
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  //message functions

}
