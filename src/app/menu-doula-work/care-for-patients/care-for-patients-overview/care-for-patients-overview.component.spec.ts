import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareForPatientsOverviewComponent } from './care-for-patients-overview.component';

describe('CareForPatientsOverviewComponent', () => {
  let component: CareForPatientsOverviewComponent;
  let fixture: ComponentFixture<CareForPatientsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareForPatientsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareForPatientsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
