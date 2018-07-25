import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../../routes/routes.module";

import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule { }
