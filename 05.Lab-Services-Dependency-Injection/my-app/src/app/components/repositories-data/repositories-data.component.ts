import {Component, OnInit} from '@angular/core';
import {RepositoriesDataService} from './repositoriesData.service';
import {ContributorsDataService} from './contributorsData.service';
import {RepositoryDataClass} from './RepositoryDataClass';
import {ContributorDataClass} from './ContributorDataClass';

@Component({
  selector: 'app-repositories-data',
  providers: [RepositoriesDataService, ContributorsDataService],
  templateUrl: './repositories-data.component.html',
  styleUrls: ['./repositories-data.component.css']
})
export class RepositoriesDataComponent implements OnInit {
  repos: Array<RepositoryDataClass>;
  contributors: Array<ContributorDataClass>;

  constructor(private repositoriesDataService: RepositoriesDataService,
              private contributorsDataService: ContributorsDataService) {
  }

  ngOnInit() {
  }

  getRepos() {
    if (this.repos !== undefined) {
      this.repos = undefined;
      this.contributors = undefined;
    } else {
      this.repositoriesDataService.getData().then(repos => {
        this.repos = repos;
      });
    }
  }

  getContributors(repo) {
    this.contributors = undefined;
    this.contributorsDataService.getData(repo).then(contributors => {
      this.contributors = contributors;
    });
  }
}
