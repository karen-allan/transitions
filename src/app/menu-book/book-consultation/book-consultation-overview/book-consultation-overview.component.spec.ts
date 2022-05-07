import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultationOverviewComponent } from './book-consultation-overview.component';

describe('BookConsultationOverviewComponent', () => {
  let component: BookConsultationOverviewComponent;
  let fixture: ComponentFixture<BookConsultationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookConsultationOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConsultationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
