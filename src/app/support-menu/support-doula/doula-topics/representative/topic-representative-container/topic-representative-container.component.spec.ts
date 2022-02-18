import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRepresentativeContainerComponent } from './topic-representative-container.component';

describe('TopicRepresentativeContainerComponent', () => {
  let component: TopicRepresentativeContainerComponent;
  let fixture: ComponentFixture<TopicRepresentativeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicRepresentativeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicRepresentativeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
