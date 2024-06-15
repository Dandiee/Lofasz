import { Injectable } from '@angular/core';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import * as signalR from '@microsoft/signalr';
import { Lofasz } from './lofasz.model';
import { LofaszActions } from './lofasz.action';

@Injectable({
  providedIn: 'root',
})
export class LofaszSignalrService {
  private hubUrl = 'https://localhost:7276/hubs/lofasz';
  private hubConnection: signalR.HubConnection;

  constructor(private store: Store<AppState>) {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.hubUrl)
      .build();

    this.hubConnection.start().catch(err => console.error(err.toString()));

    this.hubConnection.on('LofaszDeleted', (lofasz: Lofasz) => {
      this.store.dispatch(
        LofaszActions.deleteLofaszByIdSuccess({ id: lofasz.id })
      );
    });

    this.hubConnection.on('LofaszCreated', (lofasz: Lofasz) => {
      this.store.dispatch(
        LofaszActions.createLofaszSuccess({ lofasz: lofasz })
      );
    });

    this.hubConnection.on('LofaszUpdated', (lofasz: Lofasz) => {
      this.store.dispatch(
        LofaszActions.updateLofaszSuccess({ lofasz: lofasz })
      );
    });
  }
}
