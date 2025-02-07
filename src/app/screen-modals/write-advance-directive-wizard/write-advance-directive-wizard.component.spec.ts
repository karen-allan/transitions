import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAdvanceDirectiveWizardComponent } from './write-advance-directive-wizard.component';

describe('WriteAdvanceDirectiveWizardComponent', () => {
  let component: WriteAdvanceDirectiveWizardComponent;
  let fixture: ComponentFixture<WriteAdvanceDirectiveWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAdvanceDirectiveWizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAdvanceDirectiveWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
