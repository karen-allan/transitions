import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAdvocateContainerComponent } from './topic-advocate-container.component';

describe('TopicAdvocateContainerComponent', () => {
  let component: TopicAdvocateContainerComponent;
  let fixture: ComponentFixture<TopicAdvocateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicAdvocateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAdvocateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
