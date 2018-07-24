import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {FollowerDataClass} from './FollowerData';


const url = 'https://api.github.com/users/ivaylokenov/followers';

@Injectable()
export class FollowersDataService {
  constructor(private http: Http) {
  }

  getData(): Promise<Array<FollowerDataClass>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => {
        return resp.json() as FollowerDataClass[];
      })
      .catch(err => {
        console.log(err);
        return [];
      });
  }
}
