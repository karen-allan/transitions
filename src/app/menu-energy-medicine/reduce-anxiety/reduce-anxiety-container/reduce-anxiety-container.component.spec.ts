import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceAnxietyContainerComponent } from './reduce-anxiety-container.component';

describe('ReduceAnxietyContainerComponent', () => {
  let component: ReduceAnxietyContainerComponent;
  let fixture: ComponentFixture<ReduceAnxietyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceAnxietyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceAnxietyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
