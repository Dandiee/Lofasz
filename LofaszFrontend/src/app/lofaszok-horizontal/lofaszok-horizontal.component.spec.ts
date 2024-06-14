import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofaszokHorizontalComponent } from './lofaszok-horizontal.component';

describe('LofaszokHorizontalComponent', () => {
  let component: LofaszokHorizontalComponent;
  let fixture: ComponentFixture<LofaszokHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LofaszokHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LofaszokHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
