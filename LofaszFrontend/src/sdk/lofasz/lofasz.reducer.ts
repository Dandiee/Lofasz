import { createReducer, on } from '@ngrx/store';
import { LofaszActions } from './lofasz.action';
import { LofaszState } from '../store';

export const initialState: LofaszState = {
  lofaszok: [],
  isBusy: false,
  error: '',
  selectedLofasz: null,
};

export const lofaszReducer = createReducer(
  initialState,

  on(LofaszActions.selectLofasz, (state, { lofasz }) => ({
    ...state,
    selectedLofasz: lofasz,
  })),

  on(LofaszActions.getAllLofasz, state => ({ ...state, isBusy: true })),
  on(LofaszActions.getAllLofaszSuccess, (state, { lofaszok }) => ({
    ...state,
    lofaszok,
    isBusy: false,
  })),
  on(LofaszActions.getAllLofaszFailure, (state, { error }) => ({
    ...state,
    error: error.message,
    lofaszok: [], // cry me a river
    isBusy: false,
  })),

  on(LofaszActions.getLofaszById, state => ({ ...state })),
  on(LofaszActions.getLofaszByIdSuccess, (state, { lofasz }) => ({
    ...state,
    // replace the existing lofasz as we have a fresher version of it
    lofaszok: state.lofaszok.map(oldLofasz =>
      oldLofasz.id === lofasz.id ? lofasz : oldLofasz
    ),
    isBusy: false,
  })),
  on(LofaszActions.getLofaszByIdFailure, (state, { error }) => ({
    ...state,
    lastErrorOrIdk: error,
  })),

  on(LofaszActions.createLofasz, state => ({ ...state, isBusy: true })),
  on(LofaszActions.createLofaszSuccess, (state, { lofasz }) => ({
    ...state,
    // add the new lofasz to the lofaszok list
    lofaszok: [...state.lofaszok, lofasz],
    isBusy: false,
  })),
  on(LofaszActions.createLofaszFailure, (state, { error }) => ({
    ...state,
    lastErrorOrIdk: error,
    isBusy: false,
  })),

  on(LofaszActions.deleteLofaszById, state => ({ ...state })),
  on(LofaszActions.deleteLofaszByIdSuccess, (state, { id }) => ({
    ...state,
    // remove the old lofasz from the list
    lofaszok: state.lofaszok.filter(currentLofasz => currentLofasz.id !== id),
    isBusy: false,
  })),
  on(LofaszActions.deleteLofaszByIdFailure, (state, { error }) => ({
    ...state,
    lastErrorOrIdk: error,
  })),

  on(LofaszActions.updateLofasz, state => ({ ...state })),
  on(LofaszActions.updateLofaszSuccess, (state, { lofasz }) => ({
    ...state,
    // replace the existing lofasz as we have a fresher version of it
    lofaszok: state.lofaszok.map(oldLofasz =>
      oldLofasz.id === lofasz.id ? lofasz : oldLofasz
    ),
    isBusy: false,
  })),
  on(LofaszActions.updateLofaszFailure, (state, { error }) => ({
    ...state,
    lastErrorOrIdk: error,
  }))
);
