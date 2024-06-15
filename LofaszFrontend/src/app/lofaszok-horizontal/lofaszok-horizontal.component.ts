import { Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule, NgFor } from '@angular/common';
import { AppState } from '../../sdk/store';
import { Lofasz } from '../../sdk/lofasz/lofasz.model';
import { LofaszActions } from '../../sdk/lofasz/lofasz.action';

@Component({
  selector: 'app-lofaszok-horizontal',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './lofaszok-horizontal.component.html',
  styleUrl: './lofaszok-horizontal.component.scss',
})
export class LofaszokHorizontalComponent {
  lofaszok$: Observable<Lofasz[]>;
  isBusy$: Observable<boolean>;
  selectedLofaszId$: Observable<number | null>;

  constructor(private store: Store<AppState>) {
    this.lofaszok$ = store.select(state => state.lofasz.lofaszok);
    this.isBusy$ = store.select(state => state.lofasz.isBusy);
    this.selectedLofaszId$ = store.select(state => state.lofasz.selectedLofaszId);
  }

  handleClick(lofasz: Lofasz): void {
    this.selectedLofaszId$.pipe(first()).subscribe(currentlySelectedLofaszId => {

      if (
        currentlySelectedLofaszId === null ||
        currentlySelectedLofaszId != lofasz.id
      ) {
        this.store.dispatch(LofaszActions.selectLofasz({ lofaszId: lofasz.id }));
      } else {
        this.store.dispatch(LofaszActions.selectLofasz({ lofaszId: null }));
      }
    });
  }
}
