import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnrContainerComponent } from './dnr-container.component';

describe('DnrContainerComponent', () => {
  let component: DnrContainerComponent;
  let fixture: ComponentFixture<DnrContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnrContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnrContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
