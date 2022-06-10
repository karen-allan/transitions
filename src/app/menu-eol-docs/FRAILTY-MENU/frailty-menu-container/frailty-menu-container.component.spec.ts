import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrailtyMenuContainerComponent } from './frailty-menu-container.component';

describe('FrailtyMenuContainerComponent', () => {
  let component: FrailtyMenuContainerComponent;
  let fixture: ComponentFixture<FrailtyMenuContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrailtyMenuContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrailtyMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
