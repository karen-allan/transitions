import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCaregiverConsultComponent } from './print-caregiver-consult.component';

describe('PrintCaregiverConsultComponent', () => {
  let component: PrintCaregiverConsultComponent;
  let fixture: ComponentFixture<PrintCaregiverConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCaregiverConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCaregiverConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
