import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormPatientComponent } from './print-sub-form-patient.component';

describe('PrintSubFormPatientComponent', () => {
  let component: PrintSubFormPatientComponent;
  let fixture: ComponentFixture<PrintSubFormPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
