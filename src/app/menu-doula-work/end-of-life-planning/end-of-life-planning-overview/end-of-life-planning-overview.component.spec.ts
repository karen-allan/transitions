import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfLifePlanningOverviewComponent } from './end-of-life-planning-overview.component';

describe('EndOfLifePlanningOverviewComponent', () => {
  let component: EndOfLifePlanningOverviewComponent;
  let fixture: ComponentFixture<EndOfLifePlanningOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfLifePlanningOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfLifePlanningOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
