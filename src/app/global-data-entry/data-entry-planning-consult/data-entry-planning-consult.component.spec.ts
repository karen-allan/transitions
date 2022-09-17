import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryPlanningConsultComponent } from './data-entry-planning-consult.component';

describe('DataEntryPlanningConsultComponent', () => {
  let component: DataEntryPlanningConsultComponent;
  let fixture: ComponentFixture<DataEntryPlanningConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryPlanningConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryPlanningConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
