import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderYourRightsOverviewComponent } from './consider-your-rights-overview.component';

describe('ConsiderYourRightsOverviewComponent', () => {
  let component: ConsiderYourRightsOverviewComponent;
  let fixture: ComponentFixture<ConsiderYourRightsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderYourRightsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderYourRightsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
