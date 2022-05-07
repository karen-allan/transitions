import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeForConsultationPlansComponent } from './intake-for-consultation-plans.component';

describe('IntakeForConsultationPlansComponent', () => {
  let component: IntakeForConsultationPlansComponent;
  let fixture: ComponentFixture<IntakeForConsultationPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeForConsultationPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeForConsultationPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
