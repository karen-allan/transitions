import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMeridianComponent } from './selected-meridian.component';

describe('SelectedMeridianComponent', () => {
  let component: SelectedMeridianComponent;
  let fixture: ComponentFixture<SelectedMeridianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedMeridianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMeridianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
