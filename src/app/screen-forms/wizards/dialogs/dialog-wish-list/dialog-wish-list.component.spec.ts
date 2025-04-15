import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWishListComponent } from './dialog-wish-list.component';

describe('DialogWishListComponent', () => {
  let component: DialogWishListComponent;
  let fixture: ComponentFixture<DialogWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogWishListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
