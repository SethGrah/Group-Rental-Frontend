import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsApiService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http=http;
   }
   findAllCars() :Observable<any>{
    return this.http.get(environment.apiUrl);
  }
  findCarByCapacity(capacity:number):Observable<any>{
    return this.http.get(environment.apiUrl + capacity);
  }
  findCarByMake(make: string): Observable<any>{
    return this.http.get(environment.apiUrl+make);
  }
  findAvailableReservations(search:any): Observable<any>{
    return this.http.get(environment.apiUrl,search);
  }
  saveNewReservation(reservation:any):Observable<any>{
    return this.http.post(environment.apiUrl,reservation);
  }
  updateReservation(reservation:any,resId:number):Observable<any>{
    return this.http.put(environment.apiUrl+resId,reservation)
  }
  deleteReservation(id:number):Observable<any>{
    return this.http.delete(environment.apiUrl+id);
  }
}
