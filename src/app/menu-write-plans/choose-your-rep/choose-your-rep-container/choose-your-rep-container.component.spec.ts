import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourRepContainerComponent } from './choose-your-rep-container.component';

describe('ChooseYourRepContainerComponent', () => {
  let component: ChooseYourRepContainerComponent;
  let fixture: ComponentFixture<ChooseYourRepContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourRepContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseYourRepContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
