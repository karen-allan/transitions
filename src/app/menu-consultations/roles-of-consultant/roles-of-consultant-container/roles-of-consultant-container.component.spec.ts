import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesOfConsultantContainerComponent } from './roles-of-consultant-container.component';

describe('RolesOfConsultantContainerComponent', () => {
  let component: RolesOfConsultantContainerComponent;
  let fixture: ComponentFixture<RolesOfConsultantContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesOfConsultantContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesOfConsultantContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
