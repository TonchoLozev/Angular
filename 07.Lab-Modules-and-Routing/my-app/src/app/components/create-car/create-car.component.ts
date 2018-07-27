import { Component, OnInit } from '@angular/core';

import {CreateCarClass} from "./create-car";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  car: CreateCarClass;
  constructor() { }

  ngOnInit() {
    this.car = new CreateCarClass('','','','','','')
  }

  submitCar(){
    console.log(this.car)
  }
  clearInputs(){
    this.car = new CreateCarClass('','','','','','')
  }
}
