import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintEnergySessionComponent } from './print-energy-session.component';

describe('PrintEnergySessionComponent', () => {
  let component: PrintEnergySessionComponent;
  let fixture: ComponentFixture<PrintEnergySessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintEnergySessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintEnergySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
