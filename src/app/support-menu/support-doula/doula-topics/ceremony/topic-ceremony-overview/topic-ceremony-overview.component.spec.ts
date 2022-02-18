import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCeremonyOverviewComponent } from './topic-ceremony-overview.component';

describe('TopicCeremonyOverviewComponent', () => {
  let component: TopicCeremonyOverviewComponent;
  let fixture: ComponentFixture<TopicCeremonyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCeremonyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCeremonyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
