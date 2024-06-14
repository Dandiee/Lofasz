import { createReducer, on } from '@ngrx/store';
import { Lofasz } from './lofasz.model';
import { LofaszAction } from './lofasz.action';
import { EntityAdapter, EntityState } from "@ngrx/entity";

export interface LofaszState {
  lofaszok: Lofasz[];
  isBusy: boolean;
  error: string;
  selectedLofasz: Lofasz | null;
  }

  export const initialState: LofaszState = {
    lofaszok: [],
    isBusy: false,
    error: '',
    selectedLofasz: null
    };

export const lofaszReducer = createReducer(
  initialState,

  on(LofaszAction.selectLofasz, (state, {lofasz}) => ({ ...state, selectedLofasz: lofasz})),

  on(LofaszAction.getAllLofasz, state => ({ ...state, isBusy: true})),
  on(LofaszAction.getAllLofaszSuccess, (state, {lofaszok}) => ({ ...state, lofaszok, isBusy: false })),
  on(LofaszAction.getAllLofaszFailure, (state, {error}) => ({ ...state, error, isBusy: false })),

  on(LofaszAction.getLofaszById, state => ({ ...state})),
  on(LofaszAction.getLofaszByIdSuccess, (state, {lofasz}) => ({ 
    ...state,
    // aka replace the existing lofasz as we have a fresher version of it
    lofaszok: state.lofaszok.map(oldLofasz => oldLofasz.id === lofasz.id ? lofasz : oldLofasz),
    isBusy: false 
  })),
  on(LofaszAction.getLofaszByIdFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error })),

  on(LofaszAction.createLofasz, state => ({ ...state})),
  on(LofaszAction.createLofaszSuccess, (state, {lofasz}) => ({ 
    ...state,
    // aka add the new lofasz to the lofaszok list
    lofaszok:  [...state.lofaszok, lofasz],
    isBusy: false 
  })),
  on(LofaszAction.createLofaszFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error })),
  
  
  on(LofaszAction.deleteLofaszById, state => ({ ...state})),
  on(LofaszAction.deleteLofaszByIdSuccess, (state, {id}) => ({ 
    ...state,
    // aka add the new lofasz to the lofaszok list
    lofaszok:  state.lofaszok.filter(currentLofasz => currentLofasz.id !== id),
    isBusy: false 
  })),
  on(LofaszAction.deleteLofaszByIdFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error })),

  on(LofaszAction.updateLofasz, state => ({ ...state})),
  on(LofaszAction.updateLofaszSuccess, (state, {lofasz}) => ({ 
    ...state,
    // aka replace the existing lofasz as we have a fresher version of it
    lofaszok: state.lofaszok.map(oldLofasz => oldLofasz.id === lofasz.id ? lofasz : oldLofasz),
    isBusy: false 
  })),
  on(LofaszAction.updateLofaszFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error })),
);
