import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMemorialOverviewComponent } from './choose-memorial-overview.component';

describe('ChooseMemorialOverviewComponent', () => {
  let component: ChooseMemorialOverviewComponent;
  let fixture: ComponentFixture<ChooseMemorialOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMemorialOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMemorialOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
