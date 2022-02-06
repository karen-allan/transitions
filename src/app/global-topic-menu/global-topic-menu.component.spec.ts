import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTopicMenuComponent } from './global-topic-menu.component';

describe('GlobalTopicMenuComponent', () => {
  let component: GlobalTopicMenuComponent;
  let fixture: ComponentFixture<GlobalTopicMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTopicMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTopicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
