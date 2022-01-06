import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSupportOverviewComponent } from './all-support-overview.component';

describe('AllSupportOverviewComponent', () => {
  let component: AllSupportOverviewComponent;
  let fixture: ComponentFixture<AllSupportOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSupportOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSupportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
