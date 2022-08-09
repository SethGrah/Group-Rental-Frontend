import { FactoryTarget } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsApiService } from '../cars-api.service';
import { user } from '../models/user';
import { UserFactory } from '../user-factory.service';
import { DatePipe } from '@angular/common';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: [UserFactory]
})
export class UserRegistrationComponent implements OnInit {
  service: CarsApiService;
  factory: UserFactory;
  nUser: user;

  userForm: FormGroup;
  

  today = new Date();
  minAge = new Date(this.today.getFullYear() - 25, this.today.getMonth(), this.today.getDate());  

  constructor(private fb: FormBuilder, public datepipe: DatePipe, service: CarsApiService, factory: UserFactory,private notificationService: NotificationsService) {
    this.service = service;
    this.userForm = this.fb.group({});
    this.factory = factory;
    this.nUser = factory.create();
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })
  }

  Submit(): void {
    console.log("min age: " + this.minAge);
    this.nUser.uID = 0;
    this.nUser.name = this.userForm.value.name;
    this.nUser.phone = this.userForm.value.phone;
    this.nUser.dob = this.datepipe.transform(this.userForm.value.dob, 'yyyyMMdd');
    this.nUser.email = this.userForm.value.email;
    this.service.saveNewUser(this.nUser).subscribe(data => {
      console.log(data)
    },(err)=>{this.notificationService.showError("Unable to save","Error")});
    //console.log("New user " + this.userForm.value.name + " " + this.userForm.value.phone + " " + this.userForm.value.dob + " " + this.userForm.value.email)
  }

}
