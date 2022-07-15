import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaComponent } from './showca.component';

describe('ShowcaComponent', () => {
  let component: ShowcaComponent;
  let fixture: ComponentFixture<ShowcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
