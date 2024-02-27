import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderAdvocatesContainerComponent } from './consider-advocates-container.component';

describe('ConsiderAdvocatesContainerComponent', () => {
  let component: ConsiderAdvocatesContainerComponent;
  let fixture: ComponentFixture<ConsiderAdvocatesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsiderAdvocatesContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsiderAdvocatesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
