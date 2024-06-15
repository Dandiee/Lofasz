// TODO: ???

import { createSelector } from "@ngrx/store";
import { AppState, } from "../store";

const appState = (state: AppState) => state;

export class LofaszSelectors {
    static selectSelectedLofasz = () => createSelector(
        appState, 
        (state: AppState) => state.lofasz.lofaszok.find(lofasz => lofasz.id === state.lofasz.selectedLofaszId)
    );
}
