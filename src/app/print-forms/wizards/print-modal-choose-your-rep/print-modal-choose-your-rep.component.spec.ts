import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintModalChooseYourRepComponent } from './print-modal-choose-your-rep.component';

describe('PrintModalChooseYourRepComponent', () => {
  let component: PrintModalChooseYourRepComponent;
  let fixture: ComponentFixture<PrintModalChooseYourRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintModalChooseYourRepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintModalChooseYourRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
