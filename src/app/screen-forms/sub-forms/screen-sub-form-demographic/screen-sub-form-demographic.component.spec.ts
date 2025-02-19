import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormDemographicComponent } from './screen-sub-form-demographic.component';

describe('ScreenSubFormDemographicComponent', () => {
  let component: ScreenSubFormDemographicComponent;
  let fixture: ComponentFixture<ScreenSubFormDemographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormDemographicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
