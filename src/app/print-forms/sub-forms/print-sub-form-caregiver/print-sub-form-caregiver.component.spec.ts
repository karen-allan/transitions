import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormCaregiverComponent } from './print-sub-form-caregiver.component';

describe('PrintSubFormCaregiverComponent', () => {
  let component: PrintSubFormCaregiverComponent;
  let fixture: ComponentFixture<PrintSubFormCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormCaregiverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
