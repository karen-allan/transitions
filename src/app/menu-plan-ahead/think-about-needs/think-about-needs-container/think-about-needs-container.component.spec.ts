import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkAboutNeedsContainerComponent } from './think-about-needs-container.component';

describe('ThinkAboutNeedsContainerComponent', () => {
  let component: ThinkAboutNeedsContainerComponent;
  let fixture: ComponentFixture<ThinkAboutNeedsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkAboutNeedsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkAboutNeedsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
