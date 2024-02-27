import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWishesWizardPrintoutComponent } from './make-wishes-wizard-printout.component';

describe('MakeWishesWizardPrintoutComponent', () => {
  let component: MakeWishesWizardPrintoutComponent;
  let fixture: ComponentFixture<MakeWishesWizardPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeWishesWizardPrintoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeWishesWizardPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
