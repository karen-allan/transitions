import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFormCaregiverConsultComponent } from './print-form-caregiver-consult.component';

describe('PrintFormCaregiverConsultComponent', () => {
  let component: PrintFormCaregiverConsultComponent;
  let fixture: ComponentFixture<PrintFormCaregiverConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintFormCaregiverConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintFormCaregiverConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
