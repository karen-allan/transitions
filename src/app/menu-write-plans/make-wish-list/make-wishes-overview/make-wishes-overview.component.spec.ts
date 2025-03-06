import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWishesOverviewComponent } from './make-wishes-overview.component';

describe('MakeWishesOverviewComponent', () => {
  let component: MakeWishesOverviewComponent;
  let fixture: ComponentFixture<MakeWishesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeWishesOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeWishesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
