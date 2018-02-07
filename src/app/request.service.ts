import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  constructor(private http: Http) { }

  doRequest (url: string) {
    return this.http.get(url).map((response) => response.json());
  }

}
