import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormDisclaimerComponent } from './screen-sub-form-disclaimer.component';

describe('ScreenSubFormDisclaimerComponent', () => {
  let component: ScreenSubFormDisclaimerComponent;
  let fixture: ComponentFixture<ScreenSubFormDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormDisclaimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
