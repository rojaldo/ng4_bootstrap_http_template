import { Component, OnInit, ɵisObservable } from '@angular/core';
import { RequestService } from './../request.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  public response: any = null;
  constructor(public service: RequestService) { }

  ngOnInit() {

    this.service.doRequest(this.service.url).subscribe(
      (result) => this.response = result,
      (err) => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

}
