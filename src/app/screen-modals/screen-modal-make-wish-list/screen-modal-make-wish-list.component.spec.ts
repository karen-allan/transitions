import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenModalMakeWishListComponent } from './screen-modal-make-wish-list.component';

describe('ScreenModalMakeWishListComponent', () => {
  let component: ScreenModalMakeWishListComponent;
  let fixture: ComponentFixture<ScreenModalMakeWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenModalMakeWishListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenModalMakeWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
