import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMoveEnergyContainerComponent } from './topic-move-energy-container.component';

describe('TopicMoveEnergyContainerComponent', () => {
  let component: TopicMoveEnergyContainerComponent;
  let fixture: ComponentFixture<TopicMoveEnergyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicMoveEnergyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMoveEnergyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
