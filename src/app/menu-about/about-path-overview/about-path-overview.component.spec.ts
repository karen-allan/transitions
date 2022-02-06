import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPathOverviewComponent } from './about-path-overview.component';

describe('AboutPathOverviewComponent', () => {
  let component: AboutPathOverviewComponent;
  let fixture: ComponentFixture<AboutPathOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPathOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPathOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
