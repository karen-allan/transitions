import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceMeridiansContainerComponent } from './trace-meridians-container.component';

describe('TraceMeridiansContainerComponent', () => {
  let component: TraceMeridiansContainerComponent;
  let fixture: ComponentFixture<TraceMeridiansContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceMeridiansContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceMeridiansContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
