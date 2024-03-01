import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeYourRepOverviewComponent } from './change-your-rep-overview.component';
import {ChooseYourRepOverviewComponent} from "../../choose-your-rep/choose-your-rep-overview/choose-your-rep-overview.component";


describe('ChooseYourRepOverviewComponent', () => {
  let component: ChooseYourRepOverviewComponent;
  let fixture: ComponentFixture<ChooseYourRepOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeYourRepOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeYourRepOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
