import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeForEnergySessionComponent } from './intake-for-energy-session.component';

describe('IntakeForEnergySessionComponent', () => {
  let component: IntakeForEnergySessionComponent;
  let fixture: ComponentFixture<IntakeForEnergySessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeForEnergySessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeForEnergySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
