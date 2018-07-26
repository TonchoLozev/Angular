import {Component, OnInit} from '@angular/core';

import {CarClass} from "./CarClass";

import dataService from '../../../data'
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Array<CarClass>;

  constructor(private route: Router) {
  }

  ngOnInit() {
    dataService.getAllCars().then(cars => {
      this.cars = cars.sort((a: CarClass, b: CarClass) => {
        const aDate = +new Date(a.date);
        const bDate = +new Date(b.date);

        return bDate - aDate;
      }).slice(0, 3);
    });
  }

  showCarDetails(id){
    this.route.navigateByUrl(`car/${id}`)
  }

}
