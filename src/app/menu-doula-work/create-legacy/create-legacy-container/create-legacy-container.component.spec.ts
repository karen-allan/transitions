import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLegacyContainerComponent } from './create-legacy-container.component';

describe('CreateLegacyContainerComponent', () => {
  let component: CreateLegacyContainerComponent;
  let fixture: ComponentFixture<CreateLegacyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLegacyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLegacyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
