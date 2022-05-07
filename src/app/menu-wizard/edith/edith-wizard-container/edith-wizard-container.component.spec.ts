import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithWizardContainerComponent } from './edith-wizard-container.component';

describe('EdithWizardContainerComponent', () => {
  let component: EdithWizardContainerComponent;
  let fixture: ComponentFixture<EdithWizardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithWizardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
