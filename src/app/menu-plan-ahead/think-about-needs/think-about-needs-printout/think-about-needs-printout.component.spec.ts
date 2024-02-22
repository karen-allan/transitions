import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkAboutNeedsPrintoutComponent } from './think-about-needs-printout.component';

describe('ThinkAboutNeedsPrintoutComponent', () => {
  let component: ThinkAboutNeedsPrintoutComponent;
  let fixture: ComponentFixture<ThinkAboutNeedsPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkAboutNeedsPrintoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThinkAboutNeedsPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
