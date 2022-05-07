import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfLifePlanningComponent } from './end-of-life-planning.component';

describe('EndOfLifePlanningComponent', () => {
  let component: EndOfLifePlanningComponent;
  let fixture: ComponentFixture<EndOfLifePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfLifePlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfLifePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
