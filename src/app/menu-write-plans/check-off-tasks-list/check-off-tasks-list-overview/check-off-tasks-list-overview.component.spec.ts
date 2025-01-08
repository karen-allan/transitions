import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOffTasksListOverviewComponent } from './check-off-tasks-list-overview.component';

describe('CheckOffTasksListOverviewComponent', () => {
  let component: CheckOffTasksListOverviewComponent;
  let fixture: ComponentFixture<CheckOffTasksListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckOffTasksListOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckOffTasksListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
