import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSideMenuComponent } from './form-side-menu.component';

describe('FormSideMenuComponent', () => {
  let component: FormSideMenuComponent;
  let fixture: ComponentFixture<FormSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
