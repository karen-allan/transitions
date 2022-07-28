import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfLifeDocumentsContainerComponent } from './end-of-life-documents-container.component';

describe('EndOfLifeDocumentsContainerComponent', () => {
  let component: EndOfLifeDocumentsContainerComponent;
  let fixture: ComponentFixture<EndOfLifeDocumentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfLifeDocumentsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfLifeDocumentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
