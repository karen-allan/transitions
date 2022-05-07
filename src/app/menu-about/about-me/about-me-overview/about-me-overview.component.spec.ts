import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeOverviewComponent } from './about-me-overview.component';

describe('AboutMeOverviewComponent', () => {
  let component: AboutMeOverviewComponent;
  let fixture: ComponentFixture<AboutMeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
