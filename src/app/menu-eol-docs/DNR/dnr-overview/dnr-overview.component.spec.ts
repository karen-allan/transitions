import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnrOverviewComponent } from './dnr-overview.component';

describe('DnrOverviewComponent', () => {
  let component: DnrOverviewComponent;
  let fixture: ComponentFixture<DnrOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnrOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnrOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
