import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsFeesContainerComponent } from './testimonials-fees-container.component';

describe('TestimonialsFeesContainerComponent', () => {
  let component: TestimonialsFeesContainerComponent;
  let fixture: ComponentFixture<TestimonialsFeesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialsFeesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsFeesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
