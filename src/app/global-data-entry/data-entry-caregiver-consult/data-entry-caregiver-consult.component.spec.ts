import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryCaregiverConsultComponent } from './data-entry-caregiver-consult.component';

describe('DataEntryCaregiverConsultComponent', () => {
  let component: DataEntryCaregiverConsultComponent;
  let fixture: ComponentFixture<DataEntryCaregiverConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryCaregiverConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryCaregiverConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
