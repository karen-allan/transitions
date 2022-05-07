import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasePainOverviewComponent } from './decrease-pain-overview.component';

describe('DecreasePainOverviewComponent', () => {
  let component: DecreasePainOverviewComponent;
  let fixture: ComponentFixture<DecreasePainOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecreasePainOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreasePainOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
