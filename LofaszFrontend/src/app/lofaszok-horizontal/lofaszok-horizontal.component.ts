import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LofaszAction } from '../../sdk/lofasz/lofasz.action';
import { CommonModule, NgFor } from '@angular/common';
import { AppState } from '../../sdk/store';
import { LofaszState } from '../../sdk/lofasz/lofasz.reducer';
import { Lofasz } from '../../sdk/lofasz/lofasz.model';

@Component({
  selector: 'app-lofaszok-horizontal',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './lofaszok-horizontal.component.html',
  styleUrl: './lofaszok-horizontal.component.scss'
})
export class LofaszokHorizontalComponent {

    lofaszok$: Observable<Lofasz[]>;

    constructor(store: Store<AppState>) {
      this.lofaszok$ = store.select((state) => state.lofasz.lofaszok);
      store.dispatch(LofaszAction.getAllLofasz());
    }
}
