import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourRepWizardHeaderComponent } from './choose-your-rep-wizard-header.component';

describe('ChooseYourRepWizardHeaderComponent', () => {
  let component: ChooseYourRepWizardHeaderComponent;
  let fixture: ComponentFixture<ChooseYourRepWizardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourRepWizardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseYourRepWizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
