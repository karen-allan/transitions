import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderEdithDirectiveContainerComponent } from './consider-edith-directive-container.component';

describe('ConsiderEdithDirectiveContainerComponent', () => {
  let component: ConsiderEdithDirectiveContainerComponent;
  let fixture: ComponentFixture<ConsiderEdithDirectiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderEdithDirectiveContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderEdithDirectiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
