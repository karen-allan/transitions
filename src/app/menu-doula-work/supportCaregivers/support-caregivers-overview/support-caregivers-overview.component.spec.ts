import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCaregiversOverviewComponent } from './support-caregivers-overview.component';

describe('SupportCaregiversOverviewComponent', () => {
  let component: SupportCaregiversOverviewComponent;
  let fixture: ComponentFixture<SupportCaregiversOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportCaregiversOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportCaregiversOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
