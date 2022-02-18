import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMoveEnergyOverviewComponent } from './topic-move-energy-overview.component';

describe('TopicMoveEnergyOverviewComponent', () => {
  let component: TopicMoveEnergyOverviewComponent;
  let fixture: ComponentFixture<TopicMoveEnergyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicMoveEnergyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMoveEnergyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
