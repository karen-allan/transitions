import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourRepWizardComponent } from './choose-your-rep-wizard.component';

describe('ChooseYourRepWizardComponent', () => {
  let component: ChooseYourRepWizardComponent;
  let fixture: ComponentFixture<ChooseYourRepWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourRepWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseYourRepWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
