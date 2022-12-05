import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNineDocumentComponent } from './rep-nine-document.component';

describe('RepNineDocumentComponent', () => {
  let component: RepNineDocumentComponent;
  let fixture: ComponentFixture<RepNineDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepNineDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepNineDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
