import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderAdvanceCarePlanOverviewComponent } from './consider-advance-care-plan-overview.component';

describe('ConsiderAdvanceCarePlanOverviewComponent', () => {
  let component: ConsiderAdvanceCarePlanOverviewComponent;
  let fixture: ComponentFixture<ConsiderAdvanceCarePlanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderAdvanceCarePlanOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderAdvanceCarePlanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
