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

import {UIRouterModule} from '@uirouter/angular';

const beerState = { name: 'beer', url: '/beer',  component: BeersComponent };
const apodState = { name: 'apod', url: '/apod',  component: ApodComponent };
const formState = { name: 'form', url: '/form',  component: MyFormComponent };

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
    JsonpModule,
    UIRouterModule.forRoot({ states: [ beerState, apodState, formState ], useHash: true })
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
