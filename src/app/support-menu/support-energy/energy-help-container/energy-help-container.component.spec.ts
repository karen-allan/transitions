import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyHelpContainerComponent } from './energy-help-container.component';

describe('EnergyHelpContainerComponent', () => {
  let component: EnergyHelpContainerComponent;
  let fixture: ComponentFixture<EnergyHelpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyHelpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyHelpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
