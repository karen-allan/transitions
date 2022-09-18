import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesOfConsultantOverviewComponent } from './roles-of-consultant-overview.component';

describe('RolesOfConsultantOverviewComponent', () => {
  let component: RolesOfConsultantOverviewComponent;
  let fixture: ComponentFixture<RolesOfConsultantOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesOfConsultantOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesOfConsultantOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
