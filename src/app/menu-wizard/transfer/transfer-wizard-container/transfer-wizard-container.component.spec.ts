import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWizardContainerComponent } from './transfer-wizard-container.component';

describe('TransferWizardContainerComponent', () => {
  let component: TransferWizardContainerComponent;
  let fixture: ComponentFixture<TransferWizardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferWizardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
