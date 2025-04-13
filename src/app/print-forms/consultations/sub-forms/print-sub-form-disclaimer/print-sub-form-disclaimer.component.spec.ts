import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormDisclaimerComponent } from './print-sub-form-disclaimer.component';

describe('PrintSubFormDisclaimerComponent', () => {
  let component: PrintSubFormDisclaimerComponent;
  let fixture: ComponentFixture<PrintSubFormDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormDisclaimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
