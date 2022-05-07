import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAheadOverviewComponent } from './plan-ahead-overview.component';

describe('PlanAheadOverviewComponent', () => {
  let component: PlanAheadOverviewComponent;
  let fixture: ComponentFixture<PlanAheadOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAheadOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAheadOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
