import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPatientCareOverviewComponent } from './topic-patient-care-overview.component';

describe('TopicPatientCareOverviewComponent', () => {
  let component: TopicPatientCareOverviewComponent;
  let fixture: ComponentFixture<TopicPatientCareOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPatientCareOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPatientCareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
