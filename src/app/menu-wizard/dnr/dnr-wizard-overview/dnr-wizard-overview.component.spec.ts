import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnrWizardOverviewComponent } from './dnr-wizard-overview.component';

describe('DnrWizardOverviewComponent', () => {
  let component: DnrWizardOverviewComponent;
  let fixture: ComponentFixture<DnrWizardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnrWizardOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnrWizardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
