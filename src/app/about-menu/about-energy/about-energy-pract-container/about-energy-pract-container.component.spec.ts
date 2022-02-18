import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEnergyPractContainerComponent } from './about-energy-pract-container.component';

describe('AboutEnergyPractContainerComponent', () => {
  let component: AboutEnergyPractContainerComponent;
  let fixture: ComponentFixture<AboutEnergyPractContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEnergyPractContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEnergyPractContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
