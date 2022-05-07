import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLegacyOverviewComponent } from './create-legacy-overview.component';

describe('CreateLegacyOverviewComponent', () => {
  let component: CreateLegacyOverviewComponent;
  let fixture: ComponentFixture<CreateLegacyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLegacyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLegacyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
