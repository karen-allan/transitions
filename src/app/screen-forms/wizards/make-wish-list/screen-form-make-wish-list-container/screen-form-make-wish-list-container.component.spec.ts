import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFormMakeWishListContainerComponent } from './screen-form-make-wish-list-container.component';

describe('ScreenFormMakeWishListContainerComponent', () => {
  let component: ScreenFormMakeWishListContainerComponent;
  let fixture: ComponentFixture<ScreenFormMakeWishListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenFormMakeWishListContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenFormMakeWishListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
