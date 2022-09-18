import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPractitionerOverviewComponent } from './about-practitioner-overview.component';

describe('AboutPractitionerOverviewComponent', () => {
  let component: AboutPractitionerOverviewComponent;
  let fixture: ComponentFixture<AboutPractitionerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPractitionerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPractitionerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
