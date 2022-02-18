import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHelpBurnoutContainerComponent } from './topic-help-burnout-container.component';

describe('TopicHelpBurnoutContainerComponent', () => {
  let component: TopicHelpBurnoutContainerComponent;
  let fixture: ComponentFixture<TopicHelpBurnoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicHelpBurnoutContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHelpBurnoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
