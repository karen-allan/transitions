import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormDemographicComponent } from './print-sub-form-demographic.component';

describe('PrintSubFormDemographicComponent', () => {
  let component: PrintSubFormDemographicComponent;
  let fixture: ComponentFixture<PrintSubFormDemographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormDemographicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
