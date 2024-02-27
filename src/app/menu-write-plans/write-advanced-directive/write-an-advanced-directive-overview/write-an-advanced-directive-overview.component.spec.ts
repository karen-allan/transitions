import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnAdvancedDirectiveOverviewComponent } from './write-an-advanced-directive-overview.component';

describe('WriteAnAdvancedDirectiveOverviewComponent', () => {
  let component: WriteAnAdvancedDirectiveOverviewComponent;
  let fixture: ComponentFixture<WriteAnAdvancedDirectiveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAnAdvancedDirectiveOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAnAdvancedDirectiveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
