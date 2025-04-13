import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFormPlannerConsultComponent } from './print-form-planner-consult.component';

describe('PrintFormPlannerConsultComponent', () => {
  let component: PrintFormPlannerConsultComponent;
  let fixture: ComponentFixture<PrintFormPlannerConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintFormPlannerConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintFormPlannerConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
