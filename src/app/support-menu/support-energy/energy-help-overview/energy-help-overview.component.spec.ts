import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyHelpOverviewComponent } from './energy-help-overview.component';

describe('EnergyHelpOverviewComponent', () => {
  let component: EnergyHelpOverviewComponent;
  let fixture: ComponentFixture<EnergyHelpOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyHelpOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyHelpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
