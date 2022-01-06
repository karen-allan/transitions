import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EolDoulaOverviewComponent } from './eol-doula-overview.component';

describe('EolDoulaOverviewComponent', () => {
  let component: EolDoulaOverviewComponent;
  let fixture: ComponentFixture<EolDoulaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EolDoulaOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EolDoulaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
