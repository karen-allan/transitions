import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintModalHeadingComponent } from './print-modal-heading.component';

describe('PrintModalHeadingComponent', () => {
  let component: PrintModalHeadingComponent;
  let fixture: ComponentFixture<PrintModalHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintModalHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintModalHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
