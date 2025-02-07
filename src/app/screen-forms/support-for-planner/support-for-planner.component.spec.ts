import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportForPlannerComponent } from './support-for-planner.component';

describe('SupportForPlannerComponent', () => {
  let component: SupportForPlannerComponent;
  let fixture: ComponentFixture<SupportForPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportForPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportForPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
