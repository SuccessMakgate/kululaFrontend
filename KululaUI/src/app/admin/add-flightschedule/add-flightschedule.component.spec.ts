import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightscheduleComponent } from './add-flightschedule.component';

describe('AddFlightscheduleComponent', () => {
  let component: AddFlightscheduleComponent;
  let fixture: ComponentFixture<AddFlightscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlightscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
