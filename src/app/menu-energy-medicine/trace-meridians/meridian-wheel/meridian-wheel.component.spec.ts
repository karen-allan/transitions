import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeridianWheelComponent } from './meridian-wheel.component';

describe('MeridianWheelComponent', () => {
  let component: MeridianWheelComponent;
  let fixture: ComponentFixture<MeridianWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeridianWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeridianWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
