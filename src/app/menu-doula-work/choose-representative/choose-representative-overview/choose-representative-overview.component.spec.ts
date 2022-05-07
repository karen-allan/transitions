import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRepresentativeOverviewComponent } from './choose-representative-overview.component';

describe('ChooseRepresentativeOverviewComponent', () => {
  let component: ChooseRepresentativeOverviewComponent;
  let fixture: ComponentFixture<ChooseRepresentativeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRepresentativeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRepresentativeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
