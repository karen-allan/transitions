import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHelpBurnoutOverviewComponent } from './topic-help-burnout-overview.component';

describe('TopicHelpBurnoutOverviewComponent', () => {
  let component: TopicHelpBurnoutOverviewComponent;
  let fixture: ComponentFixture<TopicHelpBurnoutOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicHelpBurnoutOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHelpBurnoutOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
