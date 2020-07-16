import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCollectionComponent } from './cars-collection.component';

describe('CarsCollectionComponent', () => {
  let component: CarsCollectionComponent;
  let fixture: ComponentFixture<CarsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
