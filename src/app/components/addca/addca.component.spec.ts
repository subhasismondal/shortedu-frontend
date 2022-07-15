import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcaComponent } from './addca.component';

describe('AddcaComponent', () => {
  let component: AddcaComponent;
  let fixture: ComponentFixture<AddcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
