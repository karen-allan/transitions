import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverElementContainerComponent } from './discover-element-container.component';

describe('DiscoverElementContainerComponent', () => {
  let component: DiscoverElementContainerComponent;
  let fixture: ComponentFixture<DiscoverElementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverElementContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverElementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
