import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormWriteDirectiveContainerComponent } from './screen-form-write-directive-container.component';

describe('ScreenFormWriteDirectiveContainerComponent', () => {
  let component: ScreenFormWriteDirectiveContainerComponent;
  let fixture: ComponentFixture<ScreenFormWriteDirectiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormWriteDirectiveContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormWriteDirectiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
