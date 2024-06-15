import { Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Store } from '@ngrx/store';
import { LofaszActions } from '../../sdk/lofasz/lofasz.action';
import { CommonModule, NgFor } from '@angular/common';
import { AppState } from '../../sdk/store';
import { Lofasz } from '../../sdk/lofasz/lofasz.model';

@Component({
  selector: 'app-lofaszok-vertical',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './lofaszok-vertical.component.html',
  styleUrl: './lofaszok-vertical.component.scss',
})
export class LofaszokVerticalComponent {
  lofaszok$: Observable<Lofasz[]>;
  isBusy$: Observable<boolean>;
  store: Store<AppState>;
  selectedLofaszId$: Observable<number | null>;

  constructor(store: Store<AppState>) {
    this.store = store;
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

  deleteLofasz(lofasz: Lofasz): void {
    this.store.dispatch(LofaszActions.deleteLofaszById({ id: lofasz.id }));
  }
}
