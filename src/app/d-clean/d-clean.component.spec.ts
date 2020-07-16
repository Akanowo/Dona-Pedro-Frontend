import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCleanComponent } from './d-clean.component';

describe('DCleanComponent', () => {
  let component: DCleanComponent;
  let fixture: ComponentFixture<DCleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
