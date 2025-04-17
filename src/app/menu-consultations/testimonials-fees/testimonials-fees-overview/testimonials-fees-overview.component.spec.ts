import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsFeesOverviewComponent } from './testimonials-fees-overview.component';

describe('TestimonialsFeesOverviewComponent', () => {
  let component: TestimonialsFeesOverviewComponent;
  let fixture: ComponentFixture<TestimonialsFeesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsFeesOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsFeesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
