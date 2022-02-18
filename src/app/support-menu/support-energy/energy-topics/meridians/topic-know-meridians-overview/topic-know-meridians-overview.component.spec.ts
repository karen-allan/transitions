import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicKnowMeridiansOverviewComponent } from './topic-know-meridians-overview.component';

describe('TopicKnowMeridiansOverviewComponent', () => {
  let component: TopicKnowMeridiansOverviewComponent;
  let fixture: ComponentFixture<TopicKnowMeridiansOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicKnowMeridiansOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicKnowMeridiansOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
