import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsToSignContainerComponent } from './documents-to-sign-container.component';

describe('DocumentsToSignContainerComponent', () => {
  let component: DocumentsToSignContainerComponent;
  let fixture: ComponentFixture<DocumentsToSignContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsToSignContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsToSignContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
