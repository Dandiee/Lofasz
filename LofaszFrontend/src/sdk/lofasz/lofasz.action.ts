import { createAction, props } from "@ngrx/store";
import { Guid } from "guid-typescript";
import { Lofasz } from "./lofasz.model";

export namespace LofaszAction {

    export const selectLofasz = createAction("Select a lofasz!", props<{ lofasz: Lofasz | null }>());

    export const getAllLofasz = createAction("Get all the lofasz!");
    export const getAllLofaszFailure = createAction('Failed at getting all the lofaszok!', props<{ error: any }>());
    export const getAllLofaszSuccess = createAction('Successfully getting all the lofaszok!', props<{ lofaszok: Lofasz[] }>());

    export const getLofaszById = createAction("Get a specific lofasz!", props<{ id: number }>());
    export const getLofaszByIdFailure = createAction("Fail to get a specific lofasz!", props<{ error: any }>());
    export const getLofaszByIdSuccess = createAction("Got the lofasz by id just fine!", props<{ lofasz: Lofasz }>());

    export const deleteLofaszById = createAction("Delete a specific lofasz!", props<{ id: number }>());
    export const deleteLofaszByIdFailure = createAction("Got rid of the lofasz!", props<{ error: any }>());
    export const deleteLofaszByIdSuccess = createAction("Delete a specific lofasz!", props<{ id: number }>());

    export const createLofasz = createAction("Create a brand new lofasz!", props<{lofasz: Lofasz}>());
    export const createLofaszFailure = createAction("Failed to create a new lofasz!", props<{ error: any }>());
    export const createLofaszSuccess = createAction("New lofasz created!", props<{lofasz: Lofasz}>());

    export const updateLofasz = createAction("Update an existing lofasz!", props<{ lofasz: Lofasz }>());
    export const updateLofaszFailure = createAction("Failed to update an existing lofasz!", props<{ error: any }>());
    export const updateLofaszSuccess = createAction("Lofasz refreshed!", props<{ lofasz: Lofasz }>());
}