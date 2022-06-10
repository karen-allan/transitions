import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithOverviewComponent } from './edith-overview.component';

describe('EdithOverviewComponent', () => {
  let component: EdithOverviewComponent;
  let fixture: ComponentFixture<EdithOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
