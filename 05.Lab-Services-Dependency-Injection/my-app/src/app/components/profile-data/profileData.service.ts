import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ProfileDataClass} from './ProfileDataClass';

const url = 'https://api.github.com/users/ivaylokenov';

@Injectable()
export class HomeData {
  constructor(private http: Http) {
  }

  getData(): Promise<ProfileDataClass> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as ProfileDataClass)
      .catch(err => {
        console.log(err);
        return new ProfileDataClass();
      });
  }
}
