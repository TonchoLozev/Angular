import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeModule} from "./components/home/home.module";

import {AppRoutingModule} from "./routes/routes.module";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/common/header/header.component";
import {FooterComponent} from "./components/common/footer/footer.component";
import {CarsComponent} from './components/cars/cars.component';
import {OwnersComponent} from './components/owners/owners.component';
import {CarComponent} from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarsComponent,
    OwnersComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
