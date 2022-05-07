import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCaregiversContainerComponent } from './support-caregivers-container.component';

describe('SupportCaregiversContainerComponent', () => {
  let component: SupportCaregiversContainerComponent;
  let fixture: ComponentFixture<SupportCaregiversContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportCaregiversContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportCaregiversContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
