import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeCaregiverSupportComponent } from './intake-caregiver-support.component';

describe('IntakeCaregiverSupportComponent', () => {
  let component: IntakeCaregiverSupportComponent;
  let fixture: ComponentFixture<IntakeCaregiverSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeCaregiverSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeCaregiverSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
