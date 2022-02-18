import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPatientCareContainerComponent } from './topic-patient-care-container.component';

describe('TopicPatientCareContainerComponent', () => {
  let component: TopicPatientCareContainerComponent;
  let fixture: ComponentFixture<TopicPatientCareContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPatientCareContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPatientCareContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
