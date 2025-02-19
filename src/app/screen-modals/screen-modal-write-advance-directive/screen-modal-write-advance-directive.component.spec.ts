import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModalWriteAdvanceDirectiveComponent } from './screen-modal-write-advance-directive.component';

describe('ScreenModalWriteAdvanceDirectiveComponent', () => {
  let component: ScreenModalWriteAdvanceDirectiveComponent;
  let fixture: ComponentFixture<ScreenModalWriteAdvanceDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenModalWriteAdvanceDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenModalWriteAdvanceDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
