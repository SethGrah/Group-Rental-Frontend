import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  constructor(private fb: FormBuilder, service: CarsApiService) {
    this.service = service;
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(),
      phone: new FormControl(),
      dob: new FormControl(),
      email: new FormControl()
    })
  }

  Submit(): void {
    console.log("New user " + this.form.value.name + " " + this.form.value.phone + " " + this.form.value.dob + " " + this.form.value.email)
  }

}
