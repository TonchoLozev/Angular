import {Component, OnInit} from '@angular/core';
import dataService from '../../../data'
import {CarClass} from "../home/CarClass";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Array<CarClass>;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    dataService.getAllCars().then(cars => {
      this.cars = cars;
    });
  }

  sortBy(value): void {
    if (value === 'name') {
      this.cars = this.cars.sort((a: CarClass, b: CarClass) => {
        return a.make.localeCompare(b.make);
      })
    } else if (value === 'owner') {
      this.cars = this.cars.sort((a: CarClass, b: CarClass) => {
        return a.owner.localeCompare(b.owner);
      })
    } else if (value === 'date') {
      this.cars = this.cars.sort((a: CarClass, b: CarClass) => {
        const aDate = +new Date(a.date);
        const bDate = +new Date(b.date);

        return bDate - aDate;
      })
    }
  }

  showCarDetails(id){
    this.route.navigateByUrl(`car/${id}`)
  }
}
