import {Component, OnInit} from '@angular/core';
import {FollowersDataService} from './followersData.service';
import {FollowerDataClass} from './FollowerData';

@Component({
  selector: 'app-followers-data',
  providers: [FollowersDataService],
  templateUrl: './followers-data.component.html',
  styleUrls: ['./followers-data.component.css']
})
export class FollowersDataComponent implements OnInit {
  followers: Array<FollowerDataClass>;

  constructor(private followersDataService: FollowersDataService) {
  }

  ngOnInit() {
  }

  getFollowers() {
    if (this.followers !== undefined) {
      this.followers = undefined;
    } else {
      this.followersDataService.getData().then(followers => {
        this.followers = followers;
      });
    }
  }
}
