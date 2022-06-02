import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepNineFinalComponent } from './rep-nine-final.component';

describe('RepNineFinalComponent', () => {
  let component: RepNineFinalComponent;
  let fixture: ComponentFixture<RepNineFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepNineFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepNineFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
