import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormMakeWishListOverviewComponent } from './screen-form-make-wish-list-overview.component';

describe('ScreenFormMakeWishListOverviewComponent', () => {
  let component: ScreenFormMakeWishListOverviewComponent;
  let fixture: ComponentFixture<ScreenFormMakeWishListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormMakeWishListOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormMakeWishListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
