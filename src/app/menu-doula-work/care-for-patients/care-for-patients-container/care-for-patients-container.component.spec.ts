import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareForPatientsContainerComponent } from './care-for-patients-container.component';

describe('CareForPatientsContainerComponent', () => {
  let component: CareForPatientsContainerComponent;
  let fixture: ComponentFixture<CareForPatientsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareForPatientsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareForPatientsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
