import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSessionOverviewComponent } from './book-session-overview.component';

describe('BookSessionOverviewComponent', () => {
  let component: BookSessionOverviewComponent;
  let fixture: ComponentFixture<BookSessionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSessionOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSessionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
