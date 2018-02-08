import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';

@Component({
  selector: 'app-apod-today',
  templateUrl: './apod-today.component.html',
  styleUrls: ['./apod-today.component.css']
})
export class ApodTodayComponent implements OnInit {

  constructor(public service: RequestService) { }

  ngOnInit() {
  }

}
