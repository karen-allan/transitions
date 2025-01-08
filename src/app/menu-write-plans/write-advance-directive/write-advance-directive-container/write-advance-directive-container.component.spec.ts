import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAdvanceDirectiveContainerComponent } from './write-advance-directive-container.component';

describe('WriteAdvanceDirectiveContainerComponent', () => {
  let component: WriteAdvanceDirectiveContainerComponent;
  let fixture: ComponentFixture<WriteAdvanceDirectiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAdvanceDirectiveContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAdvanceDirectiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
