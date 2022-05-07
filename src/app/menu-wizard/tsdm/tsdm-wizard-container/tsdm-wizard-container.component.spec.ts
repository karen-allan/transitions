import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsdmWizardContainerComponent } from './tsdm-wizard-container.component';

describe('TsdmWizardContainerComponent', () => {
  let component: TsdmWizardContainerComponent;
  let fixture: ComponentFixture<TsdmWizardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsdmWizardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsdmWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
