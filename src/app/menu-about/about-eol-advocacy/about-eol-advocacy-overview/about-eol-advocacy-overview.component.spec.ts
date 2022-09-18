import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEolAdvocacyOverviewComponent } from './about-eol-advocacy-overview.component';

describe('AboutEolAdvocacyOverviewComponent', () => {
  let component: AboutEolAdvocacyOverviewComponent;
  let fixture: ComponentFixture<AboutEolAdvocacyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEolAdvocacyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEolAdvocacyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
