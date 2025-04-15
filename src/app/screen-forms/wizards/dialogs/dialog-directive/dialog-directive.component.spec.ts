import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDirectiveComponent } from './dialog-directive.component';

describe('DialogDirectiveComponent', () => {
  let component: DialogDirectiveComponent;
  let fixture: ComponentFixture<DialogDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
