import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintIntakeForPlansComponent } from './print-intake-for-plans.component';

describe('PrintIntakeForConsultationPlansComponent', () => {
  let component: PrintIntakeForPlansComponent;
  let fixture: ComponentFixture<PrintIntakeForPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintIntakeForPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintIntakeForPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
