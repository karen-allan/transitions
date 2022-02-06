import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAdvocateOverviewComponent } from './topic-advocate-overview.component';

describe('TopicAdvocateOverviewComponent', () => {
  let component: TopicAdvocateOverviewComponent;
  let fixture: ComponentFixture<TopicAdvocateOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicAdvocateOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAdvocateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
