import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementWheelComponent } from './element-wheel.component';

describe('ElementWheelComponent', () => {
  let component: ElementWheelComponent;
  let fixture: ComponentFixture<ElementWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
