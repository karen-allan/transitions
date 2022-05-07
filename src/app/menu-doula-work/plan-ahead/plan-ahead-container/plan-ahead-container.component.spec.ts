import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAheadContainerComponent } from './plan-ahead-container.component';

describe('PlanAheadContainerComponent', () => {
  let component: PlanAheadContainerComponent;
  let fixture: ComponentFixture<PlanAheadContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAheadContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAheadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
