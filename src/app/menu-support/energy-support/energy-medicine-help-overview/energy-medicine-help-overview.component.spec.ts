import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyMedicineHelpOverviewComponent } from './energy-medicine-help-overview.component';

describe('EnergyMedicineHelpOverviewComponent', () => {
  let component: EnergyMedicineHelpOverviewComponent;
  let fixture: ComponentFixture<EnergyMedicineHelpOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyMedicineHelpOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyMedicineHelpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
