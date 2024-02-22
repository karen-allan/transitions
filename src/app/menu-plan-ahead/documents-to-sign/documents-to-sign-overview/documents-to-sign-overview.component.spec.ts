import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsToSignOverviewComponent } from './documents-to-sign-overview.component';

describe('DocumentsToSignOverviewComponent', () => {
  let component: DocumentsToSignOverviewComponent;
  let fixture: ComponentFixture<DocumentsToSignOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsToSignOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsToSignOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
