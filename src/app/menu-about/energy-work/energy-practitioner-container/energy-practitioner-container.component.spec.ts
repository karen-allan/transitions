import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyPractitionerContainerComponent } from './energy-practitioner-container.component';

describe('EnergyPractitionerContainerComponent', () => {
  let component: EnergyPractitionerContainerComponent;
  let fixture: ComponentFixture<EnergyPractitionerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyPractitionerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyPractitionerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
