import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeYourRepWizardComponent } from './change-your-rep-wizard.component';

describe('ChangeYourRepWizardComponent', () => {
  let component: ChangeYourRepWizardComponent;
  let fixture: ComponentFixture<ChangeYourRepWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeYourRepWizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeYourRepWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
