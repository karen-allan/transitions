import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormPatientConsultComponent } from './screen-form-patient-consult.component';

describe('ScreenFormPatientConsultComponent', () => {
  let component: ScreenFormPatientConsultComponent;
  let fixture: ComponentFixture<ScreenFormPatientConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormPatientConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormPatientConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
