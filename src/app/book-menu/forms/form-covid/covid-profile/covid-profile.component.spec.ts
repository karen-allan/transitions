import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidProfileComponent } from './covid-profile.component';

describe('CovidProfileComponent', () => {
  let component: CovidProfileComponent;
  let fixture: ComponentFixture<CovidProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
