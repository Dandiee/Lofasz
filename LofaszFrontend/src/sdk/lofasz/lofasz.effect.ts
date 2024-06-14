import { Action, createAction, props } from "@ngrx/store";
import { Guid } from "guid-typescript";
import { Injectable } from "@angular/core";
import { Observable, of, pipe, switchMap } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LofaszAction } from "./lofasz.action";
import { LofaszService } from "./lofasz.service";


@Injectable()
export class LofaszEffects {

    constructor(private actions$: Actions, private lofaszService: LofaszService) {}

    getAllLofasz$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(LofaszAction.getAllLofasz),
            mergeMap(() => this.lofaszService.getLofaszok()
                .pipe(
                    map((lofaszok) => LofaszAction.getAllLofaszSuccess({ lofaszok })),
                    catchError((error) => of(LofaszAction.getAllLofaszFailure({ error: error.message })))
                )
            )
        )
    );

    getLofaszById$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(LofaszAction.getLofaszById),
            mergeMap(action => this.lofaszService.getLofaszById(action.id)
                .pipe(
                    map(darabLofasz => LofaszAction.getLofaszByIdSuccess({lofasz: darabLofasz})),
                    catchError(error => of(LofaszAction.getLofaszByIdFailure({ error })))
                )
            )
        )
    );

    deleteLofaszById$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(LofaszAction.deleteLofaszById),
            mergeMap(action => this.lofaszService.deleteLofaszById(action.id)
                .pipe(
                    map(toroldLofaszId => LofaszAction.deleteLofaszByIdSuccess({id: toroldLofaszId})),
                    catchError(error => of(LofaszAction.deleteLofaszByIdFailure({ error })))
                )
            )
        )
    );

    createLofasz$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(LofaszAction.createLofasz),
            mergeMap(action => this.lofaszService.createLofasz(action.lofasz)
                .pipe(
                    map(newLofasz => LofaszAction.createLofaszSuccess({lofasz: newLofasz})),
                    catchError(error => of(LofaszAction.createLofaszFailure({ error })))
                )
            )
        )
    );

    updateLofasz$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(LofaszAction.updateLofasz),
            mergeMap(action => this.lofaszService.updateLofasz(action.lofasz)
                .pipe(
                    map(newLofasz => LofaszAction.updateLofaszSuccess({lofasz: newLofasz})),
                    catchError(error => of(LofaszAction.updateLofaszFailure({ error })))
                )
            )
        )
    );

}