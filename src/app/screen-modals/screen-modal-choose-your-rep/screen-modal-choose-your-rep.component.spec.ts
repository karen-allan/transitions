import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModalChooseYourRepComponent } from './screen-modal-choose-your-rep.component';

describe('ScreenModalChooseYourRepComponent', () => {
  let component: ScreenModalChooseYourRepComponent;
  let fixture: ComponentFixture<ScreenModalChooseYourRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenModalChooseYourRepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenModalChooseYourRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
