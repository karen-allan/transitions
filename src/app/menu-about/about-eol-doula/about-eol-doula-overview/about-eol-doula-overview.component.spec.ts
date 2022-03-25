import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEolDoulaOverviewComponent } from './about-eol-doula-overview.component';

describe('AboutEolDoulaOverviewComponent', () => {
  let component: AboutEolDoulaOverviewComponent;
  let fixture: ComponentFixture<AboutEolDoulaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEolDoulaOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEolDoulaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
