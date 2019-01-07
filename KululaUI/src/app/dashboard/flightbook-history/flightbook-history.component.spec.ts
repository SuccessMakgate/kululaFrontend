import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbookHistoryComponent } from './flightbook-history.component';

describe('FlightbookHistoryComponent', () => {
  let component: FlightbookHistoryComponent;
  let fixture: ComponentFixture<FlightbookHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightbookHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightbookHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
