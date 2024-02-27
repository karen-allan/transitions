import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeWishesWizardHeaderComponent } from './make-wishes-wizard-header.component';

describe('MakeWishesWizardHeaderComponent', () => {
  let component: MakeWishesWizardHeaderComponent;
  let fixture: ComponentFixture<MakeWishesWizardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeWishesWizardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeWishesWizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
