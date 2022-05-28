import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSessionComponent } from './print-session.component';

describe('PrintSessionComponent', () => {
  let component: PrintSessionComponent;
  let fixture: ComponentFixture<PrintSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
