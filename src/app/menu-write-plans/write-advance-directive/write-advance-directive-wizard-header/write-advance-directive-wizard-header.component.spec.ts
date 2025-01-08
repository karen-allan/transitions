import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAdvanceDirectiveWizardHeaderComponent } from './write-advance-directive-wizard-header.component';

describe('WriteAdvanceDirectiveWizardHeaderComponent', () => {
  let component: WriteAdvanceDirectiveWizardHeaderComponent;
  let fixture: ComponentFixture<WriteAdvanceDirectiveWizardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAdvanceDirectiveWizardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAdvanceDirectiveWizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
