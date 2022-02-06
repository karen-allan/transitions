import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyMedicineHelpContainerComponent } from './energy-medicine-help-container.component';

describe('EnergyMedicineHelpContainerComponent', () => {
  let component: EnergyMedicineHelpContainerComponent;
  let fixture: ComponentFixture<EnergyMedicineHelpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyMedicineHelpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyMedicineHelpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
