import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormWriteDirectiveOverviewComponent } from './screen-form-write-directive-overview.component';

describe('ScreenFormWriteDirectiveOverviewComponent', () => {
  let component: ScreenFormWriteDirectiveOverviewComponent;
  let fixture: ComponentFixture<ScreenFormWriteDirectiveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormWriteDirectiveOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormWriteDirectiveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
