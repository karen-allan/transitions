import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakePatientSupportComponent } from './intake-patient-support.component';

describe('IntakePatientSupportComponent', () => {
  let component: IntakePatientSupportComponent;
  let fixture: ComponentFixture<IntakePatientSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakePatientSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakePatientSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
