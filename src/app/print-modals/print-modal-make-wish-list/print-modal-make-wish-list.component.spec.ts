import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintModalMakeWishListComponent } from './print-modal-make-wish-list.component';

describe('PrintModalMakeWishListComponent', () => {
  let component: PrintModalMakeWishListComponent;
  let fixture: ComponentFixture<PrintModalMakeWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintModalMakeWishListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintModalMakeWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
