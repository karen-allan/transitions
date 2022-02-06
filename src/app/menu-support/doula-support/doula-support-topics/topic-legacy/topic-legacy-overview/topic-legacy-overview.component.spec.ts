import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicLegacyOverviewComponent } from './topic-legacy-overview.component';

describe('TopicLegacyOverviewComponent', () => {
  let component: TopicLegacyOverviewComponent;
  let fixture: ComponentFixture<TopicLegacyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicLegacyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicLegacyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
