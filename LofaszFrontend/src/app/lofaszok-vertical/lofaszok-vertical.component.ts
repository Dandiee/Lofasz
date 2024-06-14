import { Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Store } from '@ngrx/store';
import { LofaszAction } from '../../sdk/lofasz/lofasz.action';
import { CommonModule, NgFor } from '@angular/common';
import { AppState } from '../../sdk/store';
import { LofaszState } from '../../sdk/lofasz/lofasz.reducer';
import { Lofasz } from '../../sdk/lofasz/lofasz.model';

@Component({
  selector: 'app-lofaszok-vertical',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './lofaszok-vertical.component.html',
  styleUrl: './lofaszok-vertical.component.scss'
})
export class LofaszokVerticalComponent {
  lofaszok$: Observable<Lofasz[]>;
  isBusy$: Observable<boolean>;
    store: Store<AppState>;
    selectedLofasz$: Observable<Lofasz | null | undefined>;

  constructor(store: Store<AppState>) {
    this.store = store;
      this.lofaszok$ = store.select(state => state.lofasz.lofaszok);
      this.isBusy$ = store.select(state => state.lofasz.isBusy);
      this.selectedLofasz$ = store.select(state => state.lofasz.selectedLofasz);

      store.dispatch(LofaszAction.getAllLofasz());
  }

  handleClick(lofasz: Lofasz): void {
    this.selectedLofasz$.pipe(first()).subscribe(currentlySelectedLofasz => {
      if (currentlySelectedLofasz === null || currentlySelectedLofasz != lofasz) {
        this.store.dispatch(LofaszAction.selectLofasz({lofasz: lofasz}));
      }
      else {
        this.store.dispatch(LofaszAction.selectLofasz({lofasz: null}));
      }
    })
  }
}
