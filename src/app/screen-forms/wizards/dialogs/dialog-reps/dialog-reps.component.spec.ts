import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRepsComponent } from './dialog-reps.component';

describe('DialogRepsComponent', () => {
  let component: DialogRepsComponent;
  let fixture: ComponentFixture<DialogRepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogRepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogRepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
