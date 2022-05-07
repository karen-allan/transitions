import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMemorialContainerComponent } from './choose-memorial-container.component';

describe('ChooseMemorialContainerComponent', () => {
  let component: ChooseMemorialContainerComponent;
  let fixture: ComponentFixture<ChooseMemorialContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMemorialContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMemorialContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
