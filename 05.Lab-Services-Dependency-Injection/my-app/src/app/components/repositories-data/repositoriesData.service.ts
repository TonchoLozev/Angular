import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RepositoryDataClass} from './RepositoryDataClass';


const url = 'https://api.github.com/users/ivaylokenov/repos';

@Injectable()
export class RepositoriesDataService {
  constructor(private http: Http) {
  }

  getData(): Promise<Array<RepositoryDataClass>> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => {
        return resp.json() as RepositoryDataClass[];
      })
      .catch(err => {
        console.log(err);
        return [];
      });
  }
}
