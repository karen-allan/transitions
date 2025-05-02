import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPractitionerContainerComponent } from './about-practitioner-container.component';

describe('AboutPractitionerContainerComponent', () => {
  let component: AboutPractitionerContainerComponent;
  let fixture: ComponentFixture<AboutPractitionerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPractitionerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPractitionerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
