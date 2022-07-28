import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CarsApiService } from '../cars-api.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  service: CarsApiService;
  form: FormGroup;
  constructor( private fb: FormBuilder,service: CarsApiService) {
    this.service = service;
    this.form=this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(),
        end: new FormControl()
      }),
    })
  }
  onSubmit(): void {
    console.log("Searching..." + this.form.value.daterange);
    // this.save(this.)
  }
}
