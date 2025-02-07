import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAdvanceDirectiveWizardPrintoutComponent } from './write-advance-directive-wizard-printout.component';

describe('WriteAdvanceDirectiveWizardPrintoutComponent', () => {
  let component: WriteAdvanceDirectiveWizardPrintoutComponent;
  let fixture: ComponentFixture<WriteAdvanceDirectiveWizardPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAdvanceDirectiveWizardPrintoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAdvanceDirectiveWizardPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
