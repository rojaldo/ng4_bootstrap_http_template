import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  public user: User;
  public myEmail: string;
  // tslint:disable-next-line:max-line-length
  public myRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

  constructor() {
    this.user =	new	User('',	'',	'');
   }

  ngOnInit() {
  }

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }
}
