import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsApiService } from '../cars-api.service';
import { user } from '../models/user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  service: CarsApiService;
  form: FormGroup;
  name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  dob = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  nUser: user;

  today = new Date();
  minAge = new Date(this.today.getFullYear() - 25, this.today.getMonth(), this.today.getDate());  

  constructor(private fb: FormBuilder, service: CarsApiService, nUser: user) {
    this.service = service;
    this.form = this.fb.group({});
    this.nUser = nUser;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.name,
      phone: this.phone,
      dob: this.dob,
      email: this.email
    })
  }

  Submit(): void {
    console.log("New user " + this.form.value.name + " " + this.form.value.phone + " " + this.form.value.dob + " " + this.form.value.email)
    this.nUser.uID = 0;
    this.nUser.name = this.form.value.name;
    this.nUser.phone = this.form.value.phone;
    this.nUser.dob = this.form.value.dob;
    this.nUser.email = this.form.value.email;
    this.service.saveNewUser(this.nUser);
  }

}
