import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ContributorDataClass} from './ContributorDataClass';


const url = 'https://api.github.com/repo/ivaylokenov/repos';

@Injectable()
export class ContributorsDataService {
  constructor(private http: Http) {
  }

  getData(repo): Promise<Array<ContributorDataClass>> {
    return this.http
      .get(`https://api.github.com/repos/ivaylokenov/${repo}/contributors`)
      .toPromise()
      .then(resp => {
        return resp.json() as ContributorDataClass[];
      })
      .catch(err => {
        console.log(err);
        return [];
      });
  }
}
