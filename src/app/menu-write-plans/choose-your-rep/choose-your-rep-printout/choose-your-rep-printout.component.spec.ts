import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseYourRepPrintoutComponent } from './choose-your-rep-printout.component';

describe('ChooseYourRepPrintoutComponent', () => {
  let component: ChooseYourRepPrintoutComponent;
  let fixture: ComponentFixture<ChooseYourRepPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseYourRepPrintoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseYourRepPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
