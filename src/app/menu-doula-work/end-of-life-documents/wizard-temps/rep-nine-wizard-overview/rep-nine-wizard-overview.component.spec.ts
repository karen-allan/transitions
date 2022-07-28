import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNineWizardOverviewComponent } from './rep-nine-wizard-overview.component';

describe('RepNineWizardOverviewComponent', () => {
  let component: RepNineWizardOverviewComponent;
  let fixture: ComponentFixture<RepNineWizardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepNineWizardOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepNineWizardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
