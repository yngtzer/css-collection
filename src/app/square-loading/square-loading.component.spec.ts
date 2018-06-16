import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareLoadingComponent } from './square-loading.component';

describe('SquareLoadingComponent', () => {
  let component: SquareLoadingComponent;
  let fixture: ComponentFixture<SquareLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
