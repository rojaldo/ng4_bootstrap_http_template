import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';


@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.service.doRequest(this.service.apodurl).subscribe(
      (result) => this.service.apodResponse = result,
      (err) => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

}
