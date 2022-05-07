import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelieveBurnoutContainerComponent } from './relieve-burnout-container.component';

describe('RelieveBurnoutContainerComponent', () => {
  let component: RelieveBurnoutContainerComponent;
  let fixture: ComponentFixture<RelieveBurnoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelieveBurnoutContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelieveBurnoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
