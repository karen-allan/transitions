import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAdvanceDirectiveOverviewComponent } from './write-advance-directive-overview.component';

describe('WriteAdvanceDirectiveOverviewComponent', () => {
  let component: WriteAdvanceDirectiveOverviewComponent;
  let fixture: ComponentFixture<WriteAdvanceDirectiveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAdvanceDirectiveOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAdvanceDirectiveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
