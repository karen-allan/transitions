import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormMedicalComponent } from './print-sub-form-medical.component';

describe('PrintSubFormMedicalComponent', () => {
  let component: PrintSubFormMedicalComponent;
  let fixture: ComponentFixture<PrintSubFormMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormMedicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
