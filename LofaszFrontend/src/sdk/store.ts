import { Action, ActionReducer } from '@ngrx/store';
import { lofaszReducer } from './lofasz/lofasz.reducer';
import { LofaszEffects } from './lofasz/lofasz.effect';
import { Lofasz } from './lofasz/lofasz.model';

export interface AppStore {
  lofasz: ActionReducer<LofaszState, Action>;
}

export interface AppState {
  lofasz: LofaszState;
}

export interface LofaszState {
  lofaszok: Lofasz[];
  isBusy: boolean;
  error: string;
  selectedLofaszId: number | null;
}

export const appStore: AppStore = {
  lofasz: lofaszReducer,
};

export const appEffects = [LofaszEffects];
