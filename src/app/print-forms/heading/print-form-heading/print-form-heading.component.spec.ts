import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFormHeadingComponent } from './print-form-heading.component';

describe('PrintFormHeadingComponent', () => {
  let component: PrintFormHeadingComponent;
  let fixture: ComponentFixture<PrintFormHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintFormHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintFormHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
