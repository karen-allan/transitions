import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkAboutNeedsWizardComponent } from './think-about-needs-wizard.component';

describe('ThinkAboutNeedsWizardComponent', () => {
  let component: ThinkAboutNeedsWizardComponent;
  let fixture: ComponentFixture<ThinkAboutNeedsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkAboutNeedsWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkAboutNeedsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
