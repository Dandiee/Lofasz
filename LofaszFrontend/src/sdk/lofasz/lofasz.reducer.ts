import { createReducer, on } from '@ngrx/store';
import { LofaszState } from './lofasz.model';
import { LofaszAction } from './lofasz.action';

const initalState: LofaszState[] = [];

export const lofaszReducer = createReducer(
  initalState,

  on(LofaszAction.getAllLofasz, state => ({ ...state, isBusy: true })),
  on(LofaszAction.getAllLofaszSuccess, (state, {lofaszok}) => ({ ...state, lofaszok: lofaszok, isBusy: false })),
  on(LofaszAction.getAllLofaszFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error, isBusy: false })),

  on(LofaszAction.getLofaszById, state => ({ ...state, isBusy: true })),
  on(LofaszAction.getLofaszByIdSuccess, (state, {lofasz}) => ({ 
    ...state,
    // aka replace the existing lofasz as we have a fresher version of it
    lofaszok: state.map(oldLofasz => oldLofasz.id === lofasz.id ? lofasz : oldLofasz),
    isBusy: false 
  })),
  on(LofaszAction.getLofaszByIdFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error, isBusy: false })),

  on(LofaszAction.createLofasz, state => ({ ...state, isBusy: true })),
  on(LofaszAction.createLofaszSuccess, (state, {lofasz}) => ({ 
    ...state,
    // aka add the new lofasz to the lofaszok list
    lofaszok:  [...state, lofasz],
    isBusy: false 
  })),
  on(LofaszAction.createLofaszFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error, isBusy: false })),
  
  
  on(LofaszAction.deleteLofaszById, state => ({ ...state, isBusy: true })),
  on(LofaszAction.deleteLofaszByIdSuccess, (state, {id}) => ({ 
    ...state,
    // aka add the new lofasz to the lofaszok list
    lofaszok:  state.filter(currentLofasz => currentLofasz.id !== id),
    isBusy: false 
  })),
  on(LofaszAction.deleteLofaszByIdFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error, isBusy: false })),

  on(LofaszAction.updateLofasz, state => ({ ...state, isBusy: true })),
  on(LofaszAction.updateLofaszSuccess, (state, {lofasz}) => ({ 
    ...state,
    // aka replace the existing lofasz as we have a fresher version of it
    lofaszok: state.map(oldLofasz => oldLofasz.id === lofasz.id ? lofasz : oldLofasz),
    isBusy: false 
  })),
  on(LofaszAction.updateLofaszFailure, (state, {error}) => ({ ...state, lastErrorOrIdk: error, isBusy: false })),
);