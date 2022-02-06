import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPathContainerComponent } from './about-path-container.component';

describe('AboutPathContainerComponent', () => {
  let component: AboutPathContainerComponent;
  let fixture: ComponentFixture<AboutPathContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPathContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPathContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
