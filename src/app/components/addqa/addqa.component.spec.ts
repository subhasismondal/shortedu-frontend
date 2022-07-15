import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqaComponent } from './addqa.component';

describe('AddqaComponent', () => {
  let component: AddqaComponent;
  let fixture: ComponentFixture<AddqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
