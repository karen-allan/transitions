import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormCaregiverComponent } from './screen-sub-form-caregiver.component';

describe('ScreenSubFormCaregiverComponent', () => {
  let component: ScreenSubFormCaregiverComponent;
  let fixture: ComponentFixture<ScreenSubFormCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormCaregiverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
