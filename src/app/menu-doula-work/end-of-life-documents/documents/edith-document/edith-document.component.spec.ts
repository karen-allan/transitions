import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithDocumentComponent } from './edith-document.component';

describe('EdithDocumentComponent', () => {
  let component: EdithDocumentComponent;
  let fixture: ComponentFixture<EdithDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
