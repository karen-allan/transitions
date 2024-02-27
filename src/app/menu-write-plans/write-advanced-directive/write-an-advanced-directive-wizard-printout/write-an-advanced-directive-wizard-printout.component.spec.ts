import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnAdvancedDirectiveWizardPrintoutComponent } from './write-an-advanced-directive-wizard-printout.component';

describe('WriteAnAdvancedDirectiveWizardPrintoutComponent', () => {
  let component: WriteAnAdvancedDirectiveWizardPrintoutComponent;
  let fixture: ComponentFixture<WriteAnAdvancedDirectiveWizardPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAnAdvancedDirectiveWizardPrintoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAnAdvancedDirectiveWizardPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
