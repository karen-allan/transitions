import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOffTasksListContainerComponent } from './check-off-tasks-list-container.component';

describe('CheckOffTasksListContainerComponent', () => {
  let component: CheckOffTasksListContainerComponent;
  let fixture: ComponentFixture<CheckOffTasksListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckOffTasksListContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckOffTasksListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
