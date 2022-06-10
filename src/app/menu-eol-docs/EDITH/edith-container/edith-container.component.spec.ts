import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithContainerComponent } from './edith-container.component';

describe('EdithContainerComponent', () => {
  let component: EdithContainerComponent;
  let fixture: ComponentFixture<EdithContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
