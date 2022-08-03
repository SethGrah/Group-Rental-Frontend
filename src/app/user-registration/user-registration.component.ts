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
  nUser: user;

  constructor(private fb: FormBuilder, service: CarsApiService, nUser: user) {
    this.service = service;
    this.form = this.fb.group({});
    this.nUser = nUser;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl(this.nUser.phone, [
        Validators.required
      ]),
      dob: new FormControl(this.nUser.dob, [
        Validators.required
      ]),
      email: new FormControl(this.nUser.email, [
        Validators.required
      ])
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
