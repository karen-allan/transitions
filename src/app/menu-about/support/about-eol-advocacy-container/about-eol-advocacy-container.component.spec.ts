import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEolAdvocacyContainerComponent } from './about-eol-advocacy-container.component';

describe('AboutEolAdvocacyContainerComponent', () => {
  let component: AboutEolAdvocacyContainerComponent;
  let fixture: ComponentFixture<AboutEolAdvocacyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEolAdvocacyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEolAdvocacyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
