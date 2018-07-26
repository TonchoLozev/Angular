import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CarClass} from "../home/CarClass";

import dataService from '../../../data';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car: CarClass;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    dataService.getCarById(id).then(car => {
      this.car = car;
    });
  }

  showOwner(owner) {
    this.router.navigateByUrl(`owner/${owner}`)
  }
}
