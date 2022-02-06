import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEolDoulaContainerComponent } from './about-eol-doula-container.component';

describe('AboutEolDoulaContainerComponent', () => {
  let component: AboutEolDoulaContainerComponent;
  let fixture: ComponentFixture<AboutEolDoulaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEolDoulaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEolDoulaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
