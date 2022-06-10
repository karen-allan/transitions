import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpContainerComponent } from './acp-container.component';

describe('AcpContainerComponent', () => {
  let component: AcpContainerComponent;
  let fixture: ComponentFixture<AcpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
