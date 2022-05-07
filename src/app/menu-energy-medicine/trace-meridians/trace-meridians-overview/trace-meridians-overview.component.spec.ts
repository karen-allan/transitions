import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceMeridiansOverviewComponent } from './trace-meridians-overview.component';

describe('TraceMeridiansOverviewComponent', () => {
  let component: TraceMeridiansOverviewComponent;
  let fixture: ComponentFixture<TraceMeridiansOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceMeridiansOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceMeridiansOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
