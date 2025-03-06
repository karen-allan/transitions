import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormPatientComponent } from './screen-sub-form-patient.component';

describe('ScreenSubFormPatientComponent', () => {
  let component: ScreenSubFormPatientComponent;
  let fixture: ComponentFixture<ScreenSubFormPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
