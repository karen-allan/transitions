import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelieveBurnoutOverviewComponent } from './relieve-burnout-overview.component';

describe('RelieveBurnoutOverviewComponent', () => {
  let component: RelieveBurnoutOverviewComponent;
  let fixture: ComponentFixture<RelieveBurnoutOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelieveBurnoutOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelieveBurnoutOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
