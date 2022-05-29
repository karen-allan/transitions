import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintIntakeForCaregiverComponent } from './print-intake-for-caregiver.component';

describe('PrintIntakeForCaregiverComponent', () => {
  let component: PrintIntakeForCaregiverComponent;
  let fixture: ComponentFixture<PrintIntakeForCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintIntakeForCaregiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintIntakeForCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
