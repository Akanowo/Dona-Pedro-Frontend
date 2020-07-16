import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRentalComponent } from './daily-rental.component';

describe('DailyRentalComponent', () => {
  let component: DailyRentalComponent;
  let fixture: ComponentFixture<DailyRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
