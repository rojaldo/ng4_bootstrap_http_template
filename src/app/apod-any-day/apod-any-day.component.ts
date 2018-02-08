import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from './../request.service';


const now = new Date();

@Component({
  selector: 'app-apod-any-day',
  templateUrl: './apod-any-day.component.html',
  styleUrls: ['./apod-any-day.component.css']
})
export class ApodAnyDayComponent implements OnInit {

  constructor(public service: RequestService) { }

  model: NgbDateStruct;
  date: {year: number, month: number};
  selectedDateResponse = null;

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  selectedDate(model: any) {
    const selected = this.service.apodurl + '&date=' + model.year + '-' + model.month + '-' + model.day;
    console.log(selected);
    this.service.doRequest(selected).subscribe(
      (result) => this.selectedDateResponse = result,
      (err) => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  ngOnInit() {
  }

}
