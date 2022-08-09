import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }
/**
 * The function takes two parameters, a message and a title, and then uses the toastr service to
 * display a success message with the given title.
 * @param {string} message - The message you want to display in the toast.
 * @param {string} title - The title of the toast.
 */
  showSuccess(message:string, title:string){
    this.toastr.success(message, title)
}
/**
 * The function takes two parameters, a message and a title, and then uses the toastr library to
 * display an error message with the given title.
 * @param {string} message - The message you want to display in the toast.
 * @param {string} title - The title of the toast.
 */
  showError(message:string, title:string){
  this.toastr.error(message, title)
}
}
