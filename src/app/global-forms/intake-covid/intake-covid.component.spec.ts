import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeCovidComponent } from './intake-covid.component';

describe('IntakeCovidComponent', () => {
  let component: IntakeCovidComponent;
  let fixture: ComponentFixture<IntakeCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntakeCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
