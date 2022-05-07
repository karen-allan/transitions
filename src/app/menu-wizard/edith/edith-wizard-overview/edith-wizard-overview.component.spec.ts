import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithWizardOverviewComponent } from './edith-wizard-overview.component';

describe('EdithWizardOverviewComponent', () => {
  let component: EdithWizardOverviewComponent;
  let fixture: ComponentFixture<EdithWizardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithWizardOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithWizardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
