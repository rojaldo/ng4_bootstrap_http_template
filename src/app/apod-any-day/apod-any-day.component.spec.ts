import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodAnyDayComponent } from './apod-any-day.component';

describe('ApodAnyDayComponent', () => {
  let component: ApodAnyDayComponent;
  let fixture: ComponentFixture<ApodAnyDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodAnyDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodAnyDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
