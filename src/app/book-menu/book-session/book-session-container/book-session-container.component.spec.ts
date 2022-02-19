import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSessionContainerComponent } from './book-session-container.component';

describe('BookSessionContainerComponent', () => {
  let component: BookSessionContainerComponent;
  let fixture: ComponentFixture<BookSessionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSessionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSessionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
