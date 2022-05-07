import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeForConsultationCaregiverComponent } from './intake-for-consultation-caregiver.component';

describe('IntakeForConsultationCaregiverComponent', () => {
  let component: IntakeForConsultationCaregiverComponent;
  let fixture: ComponentFixture<IntakeForConsultationCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeForConsultationCaregiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeForConsultationCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
