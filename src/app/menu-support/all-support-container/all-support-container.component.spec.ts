import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSupportContainerComponent } from './all-support-container.component';

describe('AllSupportContainerComponent', () => {
  let component: AllSupportContainerComponent;
  let fixture: ComponentFixture<AllSupportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSupportContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSupportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
