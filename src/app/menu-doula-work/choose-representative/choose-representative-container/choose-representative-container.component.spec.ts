import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRepresentativeContainerComponent } from './choose-representative-container.component';

describe('ChooseRepresentativeContainerComponent', () => {
  let component: ChooseRepresentativeContainerComponent;
  let fixture: ComponentFixture<ChooseRepresentativeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRepresentativeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRepresentativeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
