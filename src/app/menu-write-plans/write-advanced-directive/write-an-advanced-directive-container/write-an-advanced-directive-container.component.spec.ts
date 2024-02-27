import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnAdvancedDirectiveContainerComponent } from './write-an-advanced-directive-container.component';

describe('WriteAnAdvancedDirectiveContainerComponent', () => {
  let component: WriteAnAdvancedDirectiveContainerComponent;
  let fixture: ComponentFixture<WriteAnAdvancedDirectiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAnAdvancedDirectiveContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAnAdvancedDirectiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
