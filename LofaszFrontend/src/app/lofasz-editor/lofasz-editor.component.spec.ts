import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofaszEditorComponent } from './lofasz-editor.component';

describe('LofaszEditorComponent', () => {
  let component: LofaszEditorComponent;
  let fixture: ComponentFixture<LofaszEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LofaszEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LofaszEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
