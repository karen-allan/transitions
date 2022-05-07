import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeForConsultationPatientComponent } from './intake-for-consultation-patient.component';

describe('IntakeForConsultationPatientComponent', () => {
  let component: IntakeForConsultationPatientComponent;
  let fixture: ComponentFixture<IntakeForConsultationPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeForConsultationPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeForConsultationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
