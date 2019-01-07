import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarhireComponent } from './carhire.component';

describe('CarhireComponent', () => {
  let component: CarhireComponent;
  let fixture: ComponentFixture<CarhireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarhireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarhireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
