import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnWordComponent } from './on-word.component';

describe('OnWordComponent', () => {
  let component: OnWordComponent;
  let fixture: ComponentFixture<OnWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
