import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {CarsComponent} from "./cars.component";
import {CarComponent} from "../car/car.component";
import {CreateCarComponent} from "../create-car/create-car.component";

import {AppRoutingModule} from "../../routes/routes.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [CarsComponent, CarComponent, CreateCarComponent],
  providers: [],
  exports: [CarsComponent, CarComponent, CreateCarComponent]
})
export class CarsModule { }
