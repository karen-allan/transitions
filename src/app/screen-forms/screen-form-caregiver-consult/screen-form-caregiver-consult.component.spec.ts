import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormCaregiverConsultComponent } from './screen-form-caregiver-consult.component';

describe('ScreenFormCaregiverConsultComponent', () => {
  let component: ScreenFormCaregiverConsultComponent;
  let fixture: ComponentFixture<ScreenFormCaregiverConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormCaregiverConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormCaregiverConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
