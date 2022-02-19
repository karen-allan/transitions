import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultOverviewComponent } from './book-consult-overview.component';

describe('BookConsultOverviewComponent', () => {
  let component: BookConsultOverviewComponent;
  let fixture: ComponentFixture<BookConsultOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookConsultOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConsultOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
