import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSessionProfileComponent } from './print-session-profile.component';

describe('PrintSessionProfileComponent', () => {
  let component: PrintSessionProfileComponent;
  let fixture: ComponentFixture<PrintSessionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSessionProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSessionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
