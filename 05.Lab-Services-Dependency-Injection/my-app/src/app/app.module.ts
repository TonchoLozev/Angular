import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { FollowersDataComponent } from './components/followers-data/followers-data.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDataComponent,
    FollowersDataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
