import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormMedicalComponent } from './screen-sub-form-medical.component';

describe('ScreenSubFormMedicalComponent', () => {
  let component: ScreenSubFormMedicalComponent;
  let fixture: ComponentFixture<ScreenSubFormMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormMedicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
