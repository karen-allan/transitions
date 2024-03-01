import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderCprDirectiveContainerComponent } from './consider-cpr-directive-container.component';

describe('ConsiderCprDirectiveContainerComponent', () => {
  let component: ConsiderCprDirectiveContainerComponent;
  let fixture: ComponentFixture<ConsiderCprDirectiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderCprDirectiveContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderCprDirectiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
