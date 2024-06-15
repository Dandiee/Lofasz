import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LofaszActions } from './lofasz.action';
import { LofaszService } from './lofasz.service';

@Injectable()
export class LofaszEffects {
  constructor(
    private actions$: Actions,
    private lofaszService: LofaszService
  ) {}

  getAllLofasz$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LofaszActions.getAllLofasz),
      mergeMap(() =>
        this.lofaszService.getLofaszok().pipe(
          map(lofaszok => LofaszActions.getAllLofaszSuccess({ lofaszok })),
          catchError(error =>
            of(LofaszActions.getAllLofaszFailure({ error: error.message }))
          )
        )
      )
    )
  );

  getLofaszById$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LofaszActions.getLofaszById),
      mergeMap(action =>
        this.lofaszService.getLofaszById(action.id).pipe(
          map(darabLofasz =>
            LofaszActions.getLofaszByIdSuccess({ lofasz: darabLofasz })
          ),
          catchError(error => of(LofaszActions.getLofaszByIdFailure({ error })))
        )
      )
    )
  );

  deleteLofaszById$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LofaszActions.deleteLofaszById),
      mergeMap(action =>
        this.lofaszService.deleteLofaszById(action.id).pipe(
          map(toroldLofaszId =>
            LofaszActions.deleteLofaszByIdSuccess({ id: toroldLofaszId })
          ),
          catchError(error =>
            of(LofaszActions.deleteLofaszByIdFailure({ error }))
          )
        )
      )
    )
  );

  createLofasz$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LofaszActions.createLofasz),
      mergeMap(action =>
        this.lofaszService.createLofasz(action.lofasz).pipe(
          map(newLofasz =>
            LofaszActions.createLofaszSuccess({ lofasz: newLofasz })
          ),
          catchError(error => of(LofaszActions.createLofaszFailure({ error })))
        )
      )
    )
  );

  updateLofasz$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LofaszActions.updateLofasz),
      mergeMap(action =>
        this.lofaszService.updateLofasz(action.lofasz).pipe(
          map(newLofasz =>
            LofaszActions.updateLofaszSuccess({ lofasz: newLofasz })
          ),
          catchError(error => of(LofaszActions.updateLofaszFailure({ error })))
        )
      )
    )
  );
}
