import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnrNoCprDocumentComponent } from './dnr-no-cpr-document.component';

describe('DnrNoCprDocumentComponent', () => {
  let component: DnrNoCprDocumentComponent;
  let fixture: ComponentFixture<DnrNoCprDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnrNoCprDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnrNoCprDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
