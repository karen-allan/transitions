import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormChooseRepContainerComponent } from './screen-form-choose-rep-container.component';

describe('ScreenFormChooseRepContainerComponent', () => {
  let component: ScreenFormChooseRepContainerComponent;
  let fixture: ComponentFixture<ScreenFormChooseRepContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormChooseRepContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormChooseRepContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
