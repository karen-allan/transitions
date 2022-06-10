import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpOverviewComponent } from './acp-overview.component';

describe('AcpOverviewComponent', () => {
  let component: AcpOverviewComponent;
  let fixture: ComponentFixture<AcpOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcpOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
