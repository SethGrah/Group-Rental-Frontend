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
    return this.http.get(environment.apiUrl+"cars");
  }
  // findCarByCapacity(capacity:number):Observable<any>{
  //   return this.http.get(environment.apiUrl + capacity);
  // }
  // findCarByLicence(license:string):Observable<any>{
  //   return this.http.get(environment.apiUrl + license);
  // }
  findUserByEmail(email:string):Observable<any>{
    return this.http.get(environment.apiUrl+"users/email/"+email)
  }
  findAvailableReservations(search:any): Observable<any>{
    console.log(search);
    return this.http.get(environment.apiUrl+"reservations/cars/"+search.capacity+"/"+search.startDate+"/"+search.endDate);
  }
  findMyReservationsByEmail(email:string):Observable<any>{
    return this.http.get(environment.apiUrl+"reservations/user/"+email)
  }
  findMyReservationsByReservationId(id:number):Observable<any>{
    return this.http.get(environment.apiUrl+"reservations/"+id)
  }
  saveNewReservation(reservation:any):Observable<any>{
    return this.http.post(environment.apiUrl+"reservations",reservation);
  }
  updateReservation(reservation:any,resId:number):Observable<any>{
    return this.http.put(environment.apiUrl+"reservations/"+resId,reservation)
  }
  deleteReservation(id:number):Observable<any>{
    return this.http.delete(environment.apiUrl+id);
  }
  //delete user?
}
