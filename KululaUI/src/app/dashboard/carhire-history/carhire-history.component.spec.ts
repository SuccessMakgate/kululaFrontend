import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarhireHistoryComponent } from './carhire-history.component';

describe('CarhireHistoryComponent', () => {
  let component: CarhireHistoryComponent;
  let fixture: ComponentFixture<CarhireHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarhireHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarhireHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
