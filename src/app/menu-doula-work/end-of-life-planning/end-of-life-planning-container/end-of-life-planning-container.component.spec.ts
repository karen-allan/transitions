import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfLifePlanningContainerComponent } from './end-of-life-planning-container.component';

describe('EndOfLifePlanningContainerComponent', () => {
  let component: EndOfLifePlanningContainerComponent;
  let fixture: ComponentFixture<EndOfLifePlanningContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfLifePlanningContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfLifePlanningContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
