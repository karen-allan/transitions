import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpWizardContainerComponent } from './acp-wizard-container.component';

describe('AcpWizardContainerComponent', () => {
  let component: AcpWizardContainerComponent;
  let fixture: ComponentFixture<AcpWizardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcpWizardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
