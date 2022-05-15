import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionConsiderationsComponent } from './session-considerations.component';

describe('SessionConsiderationsComponent', () => {
  let component: SessionConsiderationsComponent;
  let fixture: ComponentFixture<SessionConsiderationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionConsiderationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionConsiderationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
