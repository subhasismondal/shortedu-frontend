import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowimagesComponent } from './showimages.component';

describe('ShowimagesComponent', () => {
  let component: ShowimagesComponent;
  let fixture: ComponentFixture<ShowimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
