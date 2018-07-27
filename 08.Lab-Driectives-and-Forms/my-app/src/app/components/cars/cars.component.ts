import {Component, OnInit} from '@angular/core';
import {CarClass} from './CarClass';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  engines = [1.6, 1.8, 2.0, 4.0];

  car: CarClass;

  constructor() {
  }

  ngOnInit() {
    this.car = new CarClass('', '', 0);
  }

  clearCar(){
    this.car = new CarClass('', '', 0);
  }

  onSubmit() {

    console.log(this.car);

  }
}
