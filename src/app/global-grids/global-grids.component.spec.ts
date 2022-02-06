import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalGridsComponent } from './global-grids.component';

describe('GlobalGridsComponent', () => {
  let component: GlobalGridsComponent;
  let fixture: ComponentFixture<GlobalGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalGridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
