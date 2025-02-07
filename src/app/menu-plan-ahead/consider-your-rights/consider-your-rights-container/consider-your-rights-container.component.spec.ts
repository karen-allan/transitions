import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderYourRightsContainerComponent } from './consider-your-rights-container.component';

describe('ConsiderYourRightsContainerComponent', () => {
  let component: ConsiderYourRightsContainerComponent;
  let fixture: ComponentFixture<ConsiderYourRightsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderYourRightsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderYourRightsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
