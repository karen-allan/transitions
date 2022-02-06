import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCaregiverCareOverviewComponent } from './topic-caregiver-care-overview.component';

describe('TopicCaregiverCareOverviewComponent', () => {
  let component: TopicCaregiverCareOverviewComponent;
  let fixture: ComponentFixture<TopicCaregiverCareOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCaregiverCareOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCaregiverCareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
