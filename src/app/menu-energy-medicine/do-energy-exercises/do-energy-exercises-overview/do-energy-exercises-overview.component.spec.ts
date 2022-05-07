import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoEnergyExercisesOverviewComponent } from './do-energy-exercises-overview.component';

describe('DoEnergyExercisesOverviewComponent', () => {
  let component: DoEnergyExercisesOverviewComponent;
  let fixture: ComponentFixture<DoEnergyExercisesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoEnergyExercisesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoEnergyExercisesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
