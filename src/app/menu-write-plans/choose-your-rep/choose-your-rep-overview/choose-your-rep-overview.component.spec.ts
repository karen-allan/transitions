import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourRepOverviewComponent } from './choose-your-rep-overview.component';

describe('ChooseYourRepOverviewComponent', () => {
  let component: ChooseYourRepOverviewComponent;
  let fixture: ComponentFixture<ChooseYourRepOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourRepOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseYourRepOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
