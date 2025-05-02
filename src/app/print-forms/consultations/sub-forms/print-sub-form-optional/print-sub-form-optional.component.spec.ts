import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSubFormOptionalComponent } from './print-sub-form-optional.component';

describe('PrintSubFormOptionalComponent', () => {
  let component: PrintSubFormOptionalComponent;
  let fixture: ComponentFixture<PrintSubFormOptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintSubFormOptionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintSubFormOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
