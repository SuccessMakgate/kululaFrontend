import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTravellerComponent } from './other-traveller.component';

describe('OtherTravellerComponent', () => {
  let component: OtherTravellerComponent;
  let fixture: ComponentFixture<OtherTravellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherTravellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
