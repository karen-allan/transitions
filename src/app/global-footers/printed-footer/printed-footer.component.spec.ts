import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintedFooterComponent } from './printed-footer.component';

describe('PrintedFooterComponent', () => {
  let component: PrintedFooterComponent;
  let fixture: ComponentFixture<PrintedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintedFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
