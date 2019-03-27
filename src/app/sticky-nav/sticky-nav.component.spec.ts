import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNavComponent } from './sticky-nav.component';

describe('StickyNavComponent', () => {
  let component: StickyNavComponent;
  let fixture: ComponentFixture<StickyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
