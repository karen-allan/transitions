import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverElementOverviewComponent } from './discover-element-overview.component';

describe('DiscoverElementOverviewComponent', () => {
  let component: DiscoverElementOverviewComponent;
  let fixture: ComponentFixture<DiscoverElementOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverElementOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverElementOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
