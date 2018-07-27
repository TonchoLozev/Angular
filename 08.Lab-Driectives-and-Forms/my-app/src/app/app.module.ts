import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { TextColorDirective } from './components/cars/text-color.directive';
import { MultiplicationPipe } from './components/cars/multiplication.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    TextColorDirective,
    MultiplicationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
