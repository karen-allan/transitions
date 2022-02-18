import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHelpAnxietyContainerComponent } from './topic-help-anxiety-container.component';

describe('TopicHelpAnxietyContainerComponent', () => {
  let component: TopicHelpAnxietyContainerComponent;
  let fixture: ComponentFixture<TopicHelpAnxietyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicHelpAnxietyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHelpAnxietyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
