import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeYourRepWizardPrintoutComponent } from './change-your-rep-wizard-printout.component';

describe('ChangeYourRepWizardPrintoutComponent', () => {
  let component: ChangeYourRepWizardPrintoutComponent;
  let fixture: ComponentFixture<ChangeYourRepWizardPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeYourRepWizardPrintoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeYourRepWizardPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
