import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnAdvancedDirectiveWizardHeaderComponent } from './write-an-advanced-directive-wizard-header.component';

describe('WriteAnAdvancedDirectiveWizardHeaderComponent', () => {
  let component: WriteAnAdvancedDirectiveWizardHeaderComponent;
  let fixture: ComponentFixture<WriteAnAdvancedDirectiveWizardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAnAdvancedDirectiveWizardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAnAdvancedDirectiveWizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
