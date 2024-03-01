import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderAdvanceCarePlanContainerComponent } from './consider-advance-care-plan-container.component';

describe('ConsiderAdvanceCarePlanContainerComponent', () => {
  let component: ConsiderAdvanceCarePlanContainerComponent;
  let fixture: ComponentFixture<ConsiderAdvanceCarePlanContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderAdvanceCarePlanContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderAdvanceCarePlanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
