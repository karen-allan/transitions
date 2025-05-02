import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultationContainerComponent } from './book-consultation-container.component';

describe('BookConsultationContainerComponent', () => {
  let component: BookConsultationContainerComponent;
  let fixture: ComponentFixture<BookConsultationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookConsultationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConsultationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
