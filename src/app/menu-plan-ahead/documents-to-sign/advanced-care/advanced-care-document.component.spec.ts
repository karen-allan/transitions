import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCareDocumentComponent } from './advanced-care-document.component';

describe('AdvancedCareDocumentComponent', () => {
  let component: AdvancedCareDocumentComponent;
  let fixture: ComponentFixture<AdvancedCareDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedCareDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCareDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
