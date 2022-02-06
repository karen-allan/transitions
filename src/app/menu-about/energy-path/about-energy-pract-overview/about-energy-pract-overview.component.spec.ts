import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEnergyPractOverviewComponent } from './about-energy-pract-overview.component';

describe('AboutEnergyPractOverviewComponent', () => {
  let component: AboutEnergyPractOverviewComponent;
  let fixture: ComponentFixture<AboutEnergyPractOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEnergyPractOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEnergyPractOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
