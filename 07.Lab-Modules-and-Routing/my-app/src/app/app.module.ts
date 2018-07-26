import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeModule} from "./components/home/home.module";
import {CarsModule} from "./components/cars/cars.module";
import {OwnersModule} from "./components/owners/owners.module";

import {AppRoutingModule} from "./routes/routes.module";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/common/header/header.component";
import {FooterComponent} from "./components/common/footer/footer.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CarsModule,
    OwnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
