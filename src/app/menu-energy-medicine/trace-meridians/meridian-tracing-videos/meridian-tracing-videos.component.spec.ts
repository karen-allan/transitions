import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeridianTracingVideosComponent } from './meridian-tracing-videos.component';

describe('MeridianTracingVideosComponent', () => {
  let component: MeridianTracingVideosComponent;
  let fixture: ComponentFixture<MeridianTracingVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeridianTracingVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeridianTracingVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
