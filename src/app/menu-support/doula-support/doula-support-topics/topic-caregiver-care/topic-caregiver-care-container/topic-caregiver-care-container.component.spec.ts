import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCaregiverCareContainerComponent } from './topic-caregiver-care-container.component';

describe('TopicCaregiverCareContainerComponent', () => {
  let component: TopicCaregiverCareContainerComponent;
  let fixture: ComponentFixture<TopicCaregiverCareContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCaregiverCareContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCaregiverCareContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
