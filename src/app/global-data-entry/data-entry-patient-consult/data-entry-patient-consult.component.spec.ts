import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryPatientConsultComponent } from './data-entry-patient-consult.component';

describe('DataEntryPatientConsultComponent', () => {
  let component: DataEntryPatientConsultComponent;
  let fixture: ComponentFixture<DataEntryPatientConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryPatientConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryPatientConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
