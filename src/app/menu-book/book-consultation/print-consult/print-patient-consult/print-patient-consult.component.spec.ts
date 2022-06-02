import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPatientConsultComponent } from './print-patient-consult.component';

describe('PrintPatientConsultComponent', () => {
  let component: PrintPatientConsultComponent;
  let fixture: ComponentFixture<PrintPatientConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintPatientConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPatientConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
