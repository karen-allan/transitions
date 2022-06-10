import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsdmContainerComponent } from './tsdm-container.component';

describe('TsdmContainerComponent', () => {
  let component: TsdmContainerComponent;
  let fixture: ComponentFixture<TsdmContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsdmContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsdmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
