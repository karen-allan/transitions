import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNineWizardContainerComponent } from './rep-nine-wizard-container.component';

describe('RepNineWizardContainerComponent', () => {
  let component: RepNineWizardContainerComponent;
  let fixture: ComponentFixture<RepNineWizardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepNineWizardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepNineWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
