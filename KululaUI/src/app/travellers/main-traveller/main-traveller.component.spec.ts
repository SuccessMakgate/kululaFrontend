import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTravellerComponent } from './main-traveller.component';

describe('MainTravellerComponent', () => {
  let component: MainTravellerComponent;
  let fixture: ComponentFixture<MainTravellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTravellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
