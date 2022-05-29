import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportForPatientComponent } from './support-for-patient.component';

describe('SupportForPatientComponent', () => {
  let component: SupportForPatientComponent;
  let fixture: ComponentFixture<SupportForPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportForPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
