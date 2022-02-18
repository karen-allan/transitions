import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoulaHelpOverviewComponent } from './doula-help-overview.component';

describe('DoulaHelpOverviewComponent', () => {
  let component: DoulaHelpOverviewComponent;
  let fixture: ComponentFixture<DoulaHelpOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoulaHelpOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoulaHelpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
