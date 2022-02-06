import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicLegacyContainerComponent } from './topic-legacy-container.component';

describe('TopicLegacyContainerComponent', () => {
  let component: TopicLegacyContainerComponent;
  let fixture: ComponentFixture<TopicLegacyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicLegacyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicLegacyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
