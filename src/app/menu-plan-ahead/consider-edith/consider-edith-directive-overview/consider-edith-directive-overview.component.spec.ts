import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderEdithDirectiveOverviewComponent } from './consider-edith-directive-overview.component';

describe('ConsiderEdithDirectiveOverviewComponent', () => {
  let component: ConsiderEdithDirectiveOverviewComponent;
  let fixture: ComponentFixture<ConsiderEdithDirectiveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderEdithDirectiveOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderEdithDirectiveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
