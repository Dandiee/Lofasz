import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofaszokVerticalComponent } from './lofaszok-vertical.component';

describe('LofaszokVerticalComponent', () => {
  let component: LofaszokVerticalComponent;
  let fixture: ComponentFixture<LofaszokVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LofaszokVerticalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LofaszokVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
