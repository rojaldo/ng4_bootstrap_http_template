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
  public myRegex = '';

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
