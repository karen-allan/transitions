import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultProfileComponent } from './consult-profile.component';

describe('ConsultProfileComponent', () => {
  let component: ConsultProfileComponent;
  let fixture: ComponentFixture<ConsultProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
