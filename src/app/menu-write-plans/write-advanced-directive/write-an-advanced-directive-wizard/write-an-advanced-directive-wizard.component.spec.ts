import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnAdvancedDirectiveWizardComponent } from './write-an-advanced-directive-wizard.component';

describe('WriteAnAdvancedDirectiveWizardComponent', () => {
  let component: WriteAnAdvancedDirectiveWizardComponent;
  let fixture: ComponentFixture<WriteAnAdvancedDirectiveWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAnAdvancedDirectiveWizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAnAdvancedDirectiveWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
