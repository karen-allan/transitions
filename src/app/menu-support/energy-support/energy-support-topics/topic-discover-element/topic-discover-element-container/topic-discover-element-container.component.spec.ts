import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDiscoverElementContainerComponent } from './topic-discover-element-container.component';

describe('TopicDiscoverElementContainerComponent', () => {
  let component: TopicDiscoverElementContainerComponent;
  let fixture: ComponentFixture<TopicDiscoverElementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicDiscoverElementContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDiscoverElementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
