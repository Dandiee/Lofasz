import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LofaszActions } from '../../sdk/lofasz/lofasz.action';
import { CommonModule, NgFor } from '@angular/common';
import { AppState } from '../../sdk/store';
import { Lofasz } from '../../sdk/lofasz/lofasz.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LofaszSelectors } from '../../sdk/lofasz/lofasz.selector';

@Component({
  selector: 'app-lofasz-editor',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './lofasz-editor.component.html',
  styleUrl: './lofasz-editor.component.scss',
})
export class LofaszEditorComponent implements OnInit {
  lofaszForm: FormGroup;
  selectedLofaszId$: Observable<number | null>;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.lofaszForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      isFriendly: [true],
      id: [0],
    });

    this.selectedLofaszId$ = this.store.select(state => state.lofasz.selectedLofaszId);
  }

  ngOnInit(): void {
    this.selectedLofaszId$.subscribe(lofaszId => {
      if (lofaszId) {
        const lofasz = this.store.select(LofaszSelectors.selectSelectedLofasz());
        this.lofaszForm.patchValue(lofasz);
      } else {
        this.lofaszForm.patchValue({ name: '', isFriendly: false, id: 0 });
      }
    });
  }

  onSubmit(): void {
    if (this.lofaszForm.valid) {
      const lofasz: Lofasz = this.lofaszForm.value;

      if (lofasz.id) {
        this.store.dispatch(LofaszActions.updateLofasz({ lofasz: lofasz }));
      } else {
        this.store.dispatch(LofaszActions.createLofasz({ lofasz: lofasz }));
      }

      this.store.dispatch(LofaszActions.selectLofasz({ lofaszId: null }));


      this.lofaszForm.patchValue({ name: '', isFriendly: false, id: 0 });
    } else {
      console.log('Form not valid');
    }
  }

  get name() {
    return this.lofaszForm.get('name');
  }

  get isFriendly() {
    return this.lofaszForm.get('isFriendly');
  }

  get id() {
    return this.lofaszForm.get('id');
  }
}
