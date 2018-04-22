import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MyService {

  constructor(private http: Http) {
  }

  getData() {
    let userResponse = this.http.get('http://jsonplaceholder.typicode.com/users/1').map(res => res.json());
    let postsResponse = this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1').map(res => res.json());

    return Observable.forkJoin([userResponse, postsResponse]);
  }

}
