import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {coursesReducer} from './store/reducers/course.reducers';

import {AppComponent} from './app.component';
import {CreateComponent} from './components/create/create.component';
import {FormsModule} from "@angular/forms";
import {ReadComponent} from './components/read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      courses: coursesReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
