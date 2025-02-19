import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintModalWriteAdvanceDirectiveComponent } from './print-modal-write-advance-directive.component';

describe('PrintModalWriteAdvanceDirectiveComponent', () => {
  let component: PrintModalWriteAdvanceDirectiveComponent;
  let fixture: ComponentFixture<PrintModalWriteAdvanceDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintModalWriteAdvanceDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintModalWriteAdvanceDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
