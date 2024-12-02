import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinterpolationComponent } from './sinterpolation.component';

describe('SinterpolationComponent', () => {
  let component: SinterpolationComponent;
  let fixture: ComponentFixture<SinterpolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinterpolationComponent]
    });
    fixture = TestBed.createComponent(SinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
