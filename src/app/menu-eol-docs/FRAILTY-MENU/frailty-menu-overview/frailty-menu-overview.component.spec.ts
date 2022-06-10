import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrailtyMenuOverviewComponent } from './frailty-menu-overview.component';

describe('FrailtyMenuOverviewComponent', () => {
  let component: FrailtyMenuOverviewComponent;
  let fixture: ComponentFixture<FrailtyMenuOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrailtyMenuOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrailtyMenuOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
