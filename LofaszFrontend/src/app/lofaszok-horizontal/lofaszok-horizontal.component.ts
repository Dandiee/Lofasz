import { Component } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule, NgFor } from '@angular/common';
import { AppState } from '../../sdk/store';
import { Lofasz } from '../../sdk/lofasz/lofasz.model';
import { LofaszActions } from '../../sdk/lofasz/lofasz.action';
import { LofaszSignalrService } from '../../sdk/lofasz/lofasz.signalr.service';

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
  selectedLofasz$: Observable<Lofasz | null>;

  constructor(
    private store: Store<AppState>,
    private realTimeService: LofaszSignalrService
  ) {
    this.lofaszok$ = store.select(state => state.lofasz.lofaszok);
    this.isBusy$ = store.select(state => state.lofasz.isBusy);
    this.selectedLofasz$ = store.select(state => state.lofasz.selectedLofasz);

    store.dispatch(LofaszActions.getAllLofasz());
  }

  handleClick(lofasz: Lofasz): void {
    this.selectedLofasz$.pipe(first()).subscribe(currentlySelectedLofasz => {
      if (
        currentlySelectedLofasz === null ||
        currentlySelectedLofasz != lofasz
      ) {
        this.store.dispatch(LofaszActions.selectLofasz({ lofasz: lofasz }));
      } else {
        this.store.dispatch(LofaszActions.selectLofasz({ lofasz: null }));
      }
    });
  }
}
