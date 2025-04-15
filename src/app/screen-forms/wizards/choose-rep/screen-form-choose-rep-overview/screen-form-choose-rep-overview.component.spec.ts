import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormChooseRepOverviewComponent } from './screen-form-choose-rep-overview.component';

describe('ScreenFormChooseRepOverviewComponent', () => {
  let component: ScreenFormChooseRepOverviewComponent;
  let fixture: ComponentFixture<ScreenFormChooseRepOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormChooseRepOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormChooseRepOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
