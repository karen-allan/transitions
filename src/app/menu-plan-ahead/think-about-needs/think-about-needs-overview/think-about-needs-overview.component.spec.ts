import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkAboutNeedsOverviewComponent } from './think-about-needs-overview.component';

describe('ThinkAboutNeedsOverviewComponent', () => {
  let component: ThinkAboutNeedsOverviewComponent;
  let fixture: ComponentFixture<ThinkAboutNeedsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkAboutNeedsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkAboutNeedsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
