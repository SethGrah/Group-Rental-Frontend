import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }
  showSuccess(message:string, title:string){
    this.toastr.success(message, title)
}
  showError(message:string, title:string){
  this.toastr.success(message, title)
}
}
