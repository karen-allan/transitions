import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepSectionNineOverviewComponent } from './rep-section-nine-overview.component';

describe('RepSectionNineOverviewComponent', () => {
  let component: RepSectionNineOverviewComponent;
  let fixture: ComponentFixture<RepSectionNineOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepSectionNineOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepSectionNineOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
