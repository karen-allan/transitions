import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoulaHelpContainerComponent } from './doula-help-container.component';

describe('DoulaHelpContainerComponent', () => {
  let component: DoulaHelpContainerComponent;
  let fixture: ComponentFixture<DoulaHelpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoulaHelpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoulaHelpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
