import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarhireReceiptComponent } from './carhire-receipt.component';

describe('CarhireReceiptComponent', () => {
  let component: CarhireReceiptComponent;
  let fixture: ComponentFixture<CarhireReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarhireReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarhireReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
