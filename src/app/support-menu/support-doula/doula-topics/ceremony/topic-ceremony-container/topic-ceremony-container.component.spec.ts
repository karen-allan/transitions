import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCeremonyContainerComponent } from './topic-ceremony-container.component';

describe('TopicCeremonyContainerComponent', () => {
  let component: TopicCeremonyContainerComponent;
  let fixture: ComponentFixture<TopicCeremonyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCeremonyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCeremonyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
