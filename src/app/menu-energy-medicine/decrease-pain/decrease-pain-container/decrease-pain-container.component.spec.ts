import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasePainContainerComponent } from './decrease-pain-container.component';

describe('DecreasePainContainerComponent', () => {
  let component: DecreasePainContainerComponent;
  let fixture: ComponentFixture<DecreasePainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecreasePainContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreasePainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
