import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderAdvancedCarePlanOverviewComponent } from './consider-advanced-care-plan-overview.component';

describe('ConsiderAdvancedCarePlanOverviewComponent', () => {
  let component: ConsiderAdvancedCarePlanOverviewComponent;
  let fixture: ComponentFixture<ConsiderAdvancedCarePlanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderAdvancedCarePlanOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderAdvancedCarePlanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
