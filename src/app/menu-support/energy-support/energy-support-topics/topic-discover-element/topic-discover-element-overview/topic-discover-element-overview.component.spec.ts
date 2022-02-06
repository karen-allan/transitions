import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDiscoverElementOverviewComponent } from './topic-discover-element-overview.component';

describe('TopicDiscoverElementOverviewComponent', () => {
  let component: TopicDiscoverElementOverviewComponent;
  let fixture: ComponentFixture<TopicDiscoverElementOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicDiscoverElementOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDiscoverElementOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
