import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrailityComponent } from './fraility.component';

describe('FrailityComponent', () => {
  let component: FrailityComponent;
  let fixture: ComponentFixture<FrailityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrailityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrailityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
