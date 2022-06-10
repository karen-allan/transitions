import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsdmOverviewComponent } from './tsdm-overview.component';

describe('TsdmOverviewComponent', () => {
  let component: TsdmOverviewComponent;
  let fixture: ComponentFixture<TsdmOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsdmOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsdmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
