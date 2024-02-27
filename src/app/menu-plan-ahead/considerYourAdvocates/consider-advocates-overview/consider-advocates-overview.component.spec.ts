import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderAdvocatesOverviewComponent } from './consider-advocates-overview.component';

describe('ConsiderAdvocatesOverviewComponent', () => {
  let component: ConsiderAdvocatesOverviewComponent;
  let fixture: ComponentFixture<ConsiderAdvocatesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderAdvocatesOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderAdvocatesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
