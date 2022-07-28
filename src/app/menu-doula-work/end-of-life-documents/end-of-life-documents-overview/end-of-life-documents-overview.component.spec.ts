import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfLifeDocumentsOverviewComponent } from './end-of-life-documents-overview.component';

describe('EndOfLifeDocumentsOverviewComponent', () => {
  let component: EndOfLifeDocumentsOverviewComponent;
  let fixture: ComponentFixture<EndOfLifeDocumentsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfLifeDocumentsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfLifeDocumentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
