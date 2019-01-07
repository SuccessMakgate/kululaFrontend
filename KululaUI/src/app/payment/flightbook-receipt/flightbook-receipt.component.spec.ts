import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightbookReceiptComponent } from './flightbook-receipt.component';

describe('FlightbookReceiptComponent', () => {
  let component: FlightbookReceiptComponent;
  let fixture: ComponentFixture<FlightbookReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightbookReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightbookReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
