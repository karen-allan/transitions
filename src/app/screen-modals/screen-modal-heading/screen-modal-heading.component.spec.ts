import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModalHeadingComponent } from './screen-modal-heading.component';

describe('ScreenModalHeadingComponent', () => {
  let component: ScreenModalHeadingComponent;
  let fixture: ComponentFixture<ScreenModalHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenModalHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenModalHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
