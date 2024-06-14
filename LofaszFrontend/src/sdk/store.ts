import { Action, ActionReducer } from "@ngrx/store";
import { LofaszState, lofaszReducer } from "./lofasz/lofasz.reducer";
import { LofaszEffects } from "./lofasz/lofasz.effect";

export interface AppState {
    lofasz: LofaszState
  }
  
  export interface AppStore {
    lofasz: ActionReducer<LofaszState, Action>;
  }
  
  export const appStore: AppStore = {
    lofasz: lofaszReducer
  }
  
  export const appEffects = [LofaszEffects];