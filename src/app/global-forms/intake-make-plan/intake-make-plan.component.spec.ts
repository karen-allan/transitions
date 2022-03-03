import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeMakePlanComponent } from './intake-make-plan.component';

describe('IntakeMakePlanComponent', () => {
  let component: IntakeMakePlanComponent;
  let fixture: ComponentFixture<IntakeMakePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeMakePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeMakePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
