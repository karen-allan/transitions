import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsdmWizardOverviewComponent } from './tsdm-wizard-overview.component';

describe('TsdmWizardOverviewComponent', () => {
  let component: TsdmWizardOverviewComponent;
  let fixture: ComponentFixture<TsdmWizardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsdmWizardOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsdmWizardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
