import {Component, OnInit} from '@angular/core';
import {ProfileDataClass} from './ProfileDataClass';
import {HomeData} from './profileData.service';

@Component({
  selector: 'app-profile-data',
  providers: [HomeData],
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {
  profileData: ProfileDataClass;

  constructor(private homeData: HomeData) {
  }

  ngOnInit() {
    this.homeData.getData().then(profileInfo => {
      this.profileData = profileInfo;
    });
  }
}
