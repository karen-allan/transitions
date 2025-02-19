import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormFrailityComponent } from './print-sub-form-fraility.component';

describe('PrintSubFormFrailityComponent', () => {
  let component: PrintSubFormFrailityComponent;
  let fixture: ComponentFixture<PrintSubFormFrailityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormFrailityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormFrailityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
