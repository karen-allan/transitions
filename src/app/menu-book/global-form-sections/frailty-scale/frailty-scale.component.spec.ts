import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrailtyScaleComponent } from './frailty-scale.component';

describe('FrailtyScaleComponent', () => {
  let component: FrailtyScaleComponent;
  let fixture: ComponentFixture<FrailtyScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrailtyScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrailtyScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
