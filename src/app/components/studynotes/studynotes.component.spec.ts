import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudynotesComponent } from './studynotes.component';

describe('StudynotesComponent', () => {
  let component: StudynotesComponent;
  let fixture: ComponentFixture<StudynotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudynotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
