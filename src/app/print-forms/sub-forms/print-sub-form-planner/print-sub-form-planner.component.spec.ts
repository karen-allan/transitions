import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormPlannerComponent } from './print-sub-form-planner.component';

describe('PrintSubFormPlannerComponent', () => {
  let component: PrintSubFormPlannerComponent;
  let fixture: ComponentFixture<PrintSubFormPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
