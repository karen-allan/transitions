import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeYourRepContainerComponent } from './change-your-rep-container.component';

describe('ChangeYourRepContainerComponent', () => {
  let component: ChangeYourRepContainerComponent;
  let fixture: ComponentFixture<ChangeYourRepContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseYourRepOverviewComponent ]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseYourRepOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
