import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPlanningConsultComponent } from './print-planning-consult.component';

describe('PrintPlanningConsultComponent', () => {
  let component: PrintPlanningConsultComponent;
  let fixture: ComponentFixture<PrintPlanningConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPlanningConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPlanningConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
