import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceAnxietyOverviewComponent } from './reduce-anxiety-overview.component';

describe('ReduceAnxietyOverviewComponent', () => {
  let component: ReduceAnxietyOverviewComponent;
  let fixture: ComponentFixture<ReduceAnxietyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceAnxietyOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceAnxietyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
