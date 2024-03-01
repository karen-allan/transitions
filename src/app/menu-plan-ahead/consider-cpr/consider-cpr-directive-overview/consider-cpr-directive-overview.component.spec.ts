import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderCprDirectiveOverviewComponent } from './consider-cpr-directive-overview.component';

describe('ConsiderCprDirectiveOverviewComponent', () => {
  let component: ConsiderCprDirectiveOverviewComponent;
  let fixture: ComponentFixture<ConsiderCprDirectiveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderCprDirectiveOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderCprDirectiveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
