import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHelpPainContainerComponent } from './topic-help-pain-container.component';

describe('TopicHelpPainContainerComponent', () => {
  let component: TopicHelpPainContainerComponent;
  let fixture: ComponentFixture<TopicHelpPainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicHelpPainContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicHelpPainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
