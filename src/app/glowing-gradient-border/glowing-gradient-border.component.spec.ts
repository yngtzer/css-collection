import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingGradientBorderComponent } from './glowing-gradient-border.component';

describe('GlowingGradientBorderComponent', () => {
  let component: GlowingGradientBorderComponent;
  let fixture: ComponentFixture<GlowingGradientBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowingGradientBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingGradientBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
