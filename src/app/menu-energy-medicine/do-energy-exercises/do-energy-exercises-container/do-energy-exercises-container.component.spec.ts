import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoEnergyExercisesContainerComponent } from './do-energy-exercises-container.component';

describe('DoEnergyExercisesContainerComponent', () => {
  let component: DoEnergyExercisesContainerComponent;
  let fixture: ComponentFixture<DoEnergyExercisesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoEnergyExercisesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoEnergyExercisesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
