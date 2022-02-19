import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookConsultContainerComponent } from './book-consult-container.component';

describe('BookConsultContainerComponent', () => {
  let component: BookConsultContainerComponent;
  let fixture: ComponentFixture<BookConsultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookConsultContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConsultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
