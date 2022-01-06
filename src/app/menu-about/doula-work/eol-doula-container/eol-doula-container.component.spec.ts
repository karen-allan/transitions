import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EolDoulaContainerComponent } from './eol-doula-container.component';

describe('EolDoulaContainerComponent', () => {
  let component: EolDoulaContainerComponent;
  let fixture: ComponentFixture<EolDoulaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EolDoulaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EolDoulaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
