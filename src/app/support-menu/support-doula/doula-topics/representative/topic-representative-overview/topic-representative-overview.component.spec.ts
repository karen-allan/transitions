import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRepresentativeOverviewComponent } from './topic-representative-overview.component';

describe('TopicRepresentativeOverviewComponent', () => {
  let component: TopicRepresentativeOverviewComponent;
  let fixture: ComponentFixture<TopicRepresentativeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicRepresentativeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicRepresentativeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
