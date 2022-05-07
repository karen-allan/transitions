import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnrWizardContainerComponent } from './dnr-wizard-container.component';

describe('DnrWizardContainerComponent', () => {
  let component: DnrWizardContainerComponent;
  let fixture: ComponentFixture<DnrWizardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnrWizardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnrWizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
