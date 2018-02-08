import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodTodayComponent } from './apod-today.component';

describe('ApodTodayComponent', () => {
  let component: ApodTodayComponent;
  let fixture: ComponentFixture<ApodTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
