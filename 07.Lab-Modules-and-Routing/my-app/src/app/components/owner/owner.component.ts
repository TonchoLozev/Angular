import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {OwnerClass} from "../owners/OwnerClass";
import {CarClass} from "../home/CarClass";

import dataService from '../../../data';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  owner: OwnerClass;
  cars: Array<CarClass>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const ownerName = this.route.snapshot.paramMap.get('name');

    dataService.getOwnerByName(ownerName).then(owner => {
      this.owner = owner;
    });

    dataService.getCarsByOwner(ownerName).then(cars => {
      this.cars = cars;
    })
  }

  showCar(id){
    this.router.navigateByUrl(`car/${id}`)
  }
}
