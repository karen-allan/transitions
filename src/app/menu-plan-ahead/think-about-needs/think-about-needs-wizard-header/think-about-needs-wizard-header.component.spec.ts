import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkAboutNeedsWizardHeaderComponent } from './think-about-needs-wizard-header.component';

describe('ThinkAboutNeedsWizardHeaderComponent', () => {
  let component: ThinkAboutNeedsWizardHeaderComponent;
  let fixture: ComponentFixture<ThinkAboutNeedsWizardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkAboutNeedsWizardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkAboutNeedsWizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
