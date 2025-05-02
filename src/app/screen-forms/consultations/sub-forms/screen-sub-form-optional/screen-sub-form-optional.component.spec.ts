import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormOptionalComponent } from './screen-sub-form-optional.component';

describe('ScreenSubFormOptionalComponent', () => {
  let component: ScreenSubFormOptionalComponent;
  let fixture: ComponentFixture<ScreenSubFormOptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormOptionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
