import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeYourRepWizardHeaderComponent } from './change-your-rep-wizard-header.component';

describe('ChangeYourRepWizardHeaderComponent', () => {
  let component: ChangeYourRepWizardHeaderComponent;
  let fixture: ComponentFixture<ChangeYourRepWizardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeYourRepWizardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeYourRepWizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
