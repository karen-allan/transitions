import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicKnowMeridiansContainerComponent } from './topic-know-meridians-container.component';

describe('TopicKnowMeridiansContainerComponent', () => {
  let component: TopicKnowMeridiansContainerComponent;
  let fixture: ComponentFixture<TopicKnowMeridiansContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicKnowMeridiansContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicKnowMeridiansContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
