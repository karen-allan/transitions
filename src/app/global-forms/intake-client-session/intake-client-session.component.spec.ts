import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeClientSessionComponent } from './intake-client-session.component';

describe('IntakeClientSessionComponent', () => {
  let component: IntakeClientSessionComponent;
  let fixture: ComponentFixture<IntakeClientSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeClientSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeClientSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
