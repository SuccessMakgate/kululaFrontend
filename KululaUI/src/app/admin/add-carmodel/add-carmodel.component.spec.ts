import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarmodelComponent } from './add-carmodel.component';

describe('AddCarmodelComponent', () => {
  let component: AddCarmodelComponent;
  let fixture: ComponentFixture<AddCarmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
