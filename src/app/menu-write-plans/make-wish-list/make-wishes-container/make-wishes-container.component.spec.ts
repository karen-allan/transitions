import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWishesContainerComponent } from './make-wishes-container.component';

describe('MakeWishesContainerComponent', () => {
  let component: MakeWishesContainerComponent;
  let fixture: ComponentFixture<MakeWishesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeWishesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeWishesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
