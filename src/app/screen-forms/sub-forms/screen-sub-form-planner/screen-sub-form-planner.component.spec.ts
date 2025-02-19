import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormPlannerComponent } from './screen-sub-form-planner.component';

describe('ScreenSubFormPlannerComponent', () => {
  let component: ScreenSubFormPlannerComponent;
  let fixture: ComponentFixture<ScreenSubFormPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
