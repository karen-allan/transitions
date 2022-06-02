import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryEnergySessionComponent } from './data-entry-energy-session.component';

describe('DataEntryEnergySessionComponent', () => {
  let component: DataEntryEnergySessionComponent;
  let fixture: ComponentFixture<DataEntryEnergySessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryEnergySessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryEnergySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
