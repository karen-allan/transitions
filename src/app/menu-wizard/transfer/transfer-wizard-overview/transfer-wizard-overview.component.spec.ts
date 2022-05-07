import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferWizardOverviewComponent } from './transfer-wizard-overview.component';

describe('TransferWizardOverviewComponent', () => {
  let component: TransferWizardOverviewComponent;
  let fixture: ComponentFixture<TransferWizardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferWizardOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferWizardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
