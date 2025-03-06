import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormPlannerConsultComponent } from './screen-form-planner-consult.component';

describe('ScreenFormPlannerConsultComponent', () => {
  let component: ScreenFormPlannerConsultComponent;
  let fixture: ComponentFixture<ScreenFormPlannerConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormPlannerConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormPlannerConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
