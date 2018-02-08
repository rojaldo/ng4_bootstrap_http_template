import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  public url = 'https://api.punkapi.com/v2/beers';
  public apodurl = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo';
  public apodResponse: any;
  constructor(private http: Http) { }

  doRequest (url: string) {
    return this.http.get(url).map((response) => response.json());
  }

}
