import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from "../../routes/routes.module";

import {OwnersComponent} from "./owners.component";
import {OwnerComponent} from "../owner/owner.component";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [OwnersComponent, OwnerComponent],
  providers: [],
  exports: [OwnersComponent, OwnerComponent]
})
export class OwnersModule { }
