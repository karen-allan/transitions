import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepSectionNineContainerComponent } from './rep-section-nine-container.component';

describe('RepSectionNineContainerComponent', () => {
  let component: RepSectionNineContainerComponent;
  let fixture: ComponentFixture<RepSectionNineContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepSectionNineContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepSectionNineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
