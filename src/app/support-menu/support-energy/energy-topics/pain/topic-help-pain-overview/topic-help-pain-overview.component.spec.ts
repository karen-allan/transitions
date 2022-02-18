import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHelpPainOverviewComponent } from './topic-help-pain-overview.component';

describe('TopicHelpPainOverviewComponent', () => {
  let component: TopicHelpPainOverviewComponent;
  let fixture: ComponentFixture<TopicHelpPainOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicHelpPainOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHelpPainOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
