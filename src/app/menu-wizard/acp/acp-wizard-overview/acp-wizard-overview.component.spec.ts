import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpWizardOverviewComponent } from './acp-wizard-overview.component';

describe('AcpWizardOverviewComponent', () => {
  let component: AcpWizardOverviewComponent;
  let fixture: ComponentFixture<AcpWizardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcpWizardOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpWizardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
