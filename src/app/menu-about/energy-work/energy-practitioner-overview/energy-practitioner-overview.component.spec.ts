import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPractitionerOverviewComponent } from './energy-practitioner-overview.component';

describe('EnergyPractitionerOverviewComponent', () => {
  let component: EnergyPractitionerOverviewComponent;
  let fixture: ComponentFixture<EnergyPractitionerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyPractitionerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPractitionerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
