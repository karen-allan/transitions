import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSubMenuComponent } from './global-sub-menu.component';

describe('GlobalSubMenuComponent', () => {
  let component: GlobalSubMenuComponent;
  let fixture: ComponentFixture<GlobalSubMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalSubMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
