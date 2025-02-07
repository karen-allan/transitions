import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWishesWizardComponent } from './make-wishes-wizard.component';

describe('MakeWishesWizardComponent', () => {
  let component: MakeWishesWizardComponent;
  let fixture: ComponentFixture<MakeWishesWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeWishesWizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeWishesWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
