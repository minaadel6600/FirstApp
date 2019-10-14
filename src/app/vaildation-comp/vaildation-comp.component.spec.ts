import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaildationCompComponent } from './vaildation-comp.component';

describe('VaildationCompComponent', () => {
  let component: VaildationCompComponent;
  let fixture: ComponentFixture<VaildationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaildationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaildationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
