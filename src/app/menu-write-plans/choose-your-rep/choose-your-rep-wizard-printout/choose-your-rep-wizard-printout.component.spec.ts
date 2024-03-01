import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourRepWizardPrintoutComponent } from './choose-your-rep-wizard-printout.component';

describe('ChooseYourRepWizardPrintoutComponent', () => {
  let component: ChooseYourRepWizardPrintoutComponent;
  let fixture: ComponentFixture<ChooseYourRepWizardPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseYourRepWizardPrintoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseYourRepWizardPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
