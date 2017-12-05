import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconpentComponent } from './myconpent.component';

describe('MyconpentComponent', () => {
  let component: MyconpentComponent;
  let fixture: ComponentFixture<MyconpentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyconpentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyconpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
