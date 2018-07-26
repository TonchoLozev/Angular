import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CarsComponent} from "./cars.component";
import {CarComponent} from "../car/car.component";

import {AppRoutingModule} from "../../routes/routes.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [CarsComponent, CarComponent],
  providers: [],
  exports: [CarsComponent, CarComponent]
})
export class CarsModule { }
