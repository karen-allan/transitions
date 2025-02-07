import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportForCaregiverComponent } from './support-for-caregiver.component';

describe('SupportForCaregiverComponent', () => {
  let component: SupportForCaregiverComponent;
  let fixture: ComponentFixture<SupportForCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportForCaregiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportForCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
