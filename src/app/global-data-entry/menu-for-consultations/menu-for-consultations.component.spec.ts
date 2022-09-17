import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuForConsultationsComponent } from './menu-for-consultations.component';

describe('MenuForConsultationsComponent', () => {
  let component: MenuForConsultationsComponent;
  let fixture: ComponentFixture<MenuForConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuForConsultationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuForConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
