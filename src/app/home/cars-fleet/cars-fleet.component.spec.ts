import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFleetComponent } from './cars-fleet.component';

describe('CarsFleetComponent', () => {
  let component: CarsFleetComponent;
  let fixture: ComponentFixture<CarsFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
