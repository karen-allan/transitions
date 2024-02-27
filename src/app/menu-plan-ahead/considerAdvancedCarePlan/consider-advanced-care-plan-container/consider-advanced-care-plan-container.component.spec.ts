import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderAdvancedCarePlanContainerComponent } from './consider-advanced-care-plan-container.component';

describe('ConsiderAdvancedCarePlanContainerComponent', () => {
  let component: ConsiderAdvancedCarePlanContainerComponent;
  let fixture: ComponentFixture<ConsiderAdvancedCarePlanContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderAdvancedCarePlanContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderAdvancedCarePlanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
