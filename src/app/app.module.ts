import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import	{	HttpModule,	JsonpModule	}	from	'@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BeersComponent } from './beers/beers.component';

import { RequestService } from './request.service';
import { ApodComponent } from './apod/apod.component';
import { ApodTodayComponent } from './apod-today/apod-today.component';
import { ApodAnyDayComponent } from './apod-any-day/apod-any-day.component';
import { MyFormComponent } from './my-form/my-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    ApodComponent,
    ApodTodayComponent,
    ApodAnyDayComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
