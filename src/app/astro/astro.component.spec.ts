import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroComponent } from './astro.component';

describe('AstroComponent', () => {
  let component: AstroComponent;
  let fixture: ComponentFixture<AstroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstroComponent]
    });
    fixture = TestBed.createComponent(AstroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
