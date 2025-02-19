import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenSubFormFrailityComponent } from './screen-sub-form-fraility.component';

describe('ScreenSubFormFrailityComponent', () => {
  let component: ScreenSubFormFrailityComponent;
  let fixture: ComponentFixture<ScreenSubFormFrailityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenSubFormFrailityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenSubFormFrailityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
