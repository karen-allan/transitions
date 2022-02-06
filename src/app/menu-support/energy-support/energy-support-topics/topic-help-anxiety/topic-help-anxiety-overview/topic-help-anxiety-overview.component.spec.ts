import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHelpAnxietyOverviewComponent } from './topic-help-anxiety-overview.component';

describe('TopicHelpAnxietyOverviewComponent', () => {
  let component: TopicHelpAnxietyOverviewComponent;
  let fixture: ComponentFixture<TopicHelpAnxietyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicHelpAnxietyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHelpAnxietyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
