import { createAction, props } from '@ngrx/store';
import { Lofasz } from './lofasz.model';
import { HttpErrorResponse } from '@angular/common/http';

export class LofaszActions {
  static doNothing = createAction('Do nothing at all!');

  static selectLofasz = createAction(
    'Select a lofasz!',
    props<{ lofaszId: number | null }>()
  );

  static getAllLofasz = createAction('Get all the lofasz!');
  static getAllLofaszFailure = createAction(
    'Failed at getting all the lofaszok!',
    props<{ error: HttpErrorResponse }>()
  );
  static getAllLofaszSuccess = createAction(
    'Successfully getting all the lofaszok!',
    props<{ lofaszok: Lofasz[] }>()
  );

  static getLofaszById = createAction(
    'Get a specific lofasz!',
    props<{ id: number }>()
  );
  static getLofaszByIdFailure = createAction(
    'Fail to get a specific lofasz!',
    props<{ error: HttpErrorResponse }>()
  );
  static getLofaszByIdSuccess = createAction(
    'Got the lofasz by id just fine!',
    props<{ lofasz: Lofasz }>()
  );

  static deleteLofaszById = createAction(
    'Delete a specific lofasz!',
    props<{ id: number }>()
  );
  static deleteLofaszByIdFailure = createAction(
    'Got rid of the lofasz!',
    props<{ error: HttpErrorResponse }>()
  );
  static deleteLofaszByIdSuccess = createAction(
    'Delete a specific lofasz!',
    props<{ id: number }>()
  );

  static createLofasz = createAction(
    'Create a brand new lofasz!',
    props<{ lofasz: Lofasz }>()
  );
  static createLofaszFailure = createAction(
    'Failed to create a new lofasz!',
    props<{ error: HttpErrorResponse }>()
  );
  static createLofaszSuccess = createAction(
    'New lofasz created!',
    props<{ lofasz: Lofasz }>()
  );

  static updateLofasz = createAction(
    'Update an existing lofasz!',
    props<{ lofasz: Lofasz }>()
  );
  static updateLofaszFailure = createAction(
    'Failed to update an existing lofasz!',
    props<{ error: HttpErrorResponse }>()
  );
  static updateLofaszSuccess = createAction(
    'Lofasz refreshed!',
    props<{ lofasz: Lofasz }>()
  );
}
