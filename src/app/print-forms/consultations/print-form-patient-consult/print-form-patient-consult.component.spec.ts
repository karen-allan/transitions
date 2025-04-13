import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFormPatientConsultComponent } from './print-form-patient-consult.component';

describe('PrintFormPatientConsultComponent', () => {
  let component: PrintFormPatientConsultComponent;
  let fixture: ComponentFixture<PrintFormPatientConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintFormPatientConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintFormPatientConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
