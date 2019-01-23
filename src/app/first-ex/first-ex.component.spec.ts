import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstExComponent } from './first-ex.component';

describe('FirstExComponent', () => {
  let component: FirstExComponent;
  let fixture: ComponentFixture<FirstExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
