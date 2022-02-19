import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionProfileComponent } from './session-profile.component';

describe('SessionProfileComponent', () => {
  let component: SessionProfileComponent;
  let fixture: ComponentFixture<SessionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
