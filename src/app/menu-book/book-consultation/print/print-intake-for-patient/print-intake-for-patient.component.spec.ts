import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintIntakeForPatientComponent } from './print-intake-for-patient.component';

describe('PrintIntakeForPatientComponent', () => {
  let component: PrintIntakeForPatientComponent;
  let fixture: ComponentFixture<PrintIntakeForPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintIntakeForPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintIntakeForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
