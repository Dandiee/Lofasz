import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LofaszokHorizontalComponent } from './lofaszok-horizontal/lofaszok-horizontal.component';
import { LofaszokVerticalComponent } from './lofaszok-vertical/lofaszok-vertical.component';
import { LofaszEditorComponent } from './lofasz-editor/lofasz-editor.component';
import { LofaszSignalrService } from '../sdk/lofasz/lofasz.signalr.service';
import { AppState } from '../sdk/store';
import { Store } from '@ngrx/store';
import { LofaszActions } from '../sdk/lofasz/lofasz.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LofaszokHorizontalComponent,
    LofaszokVerticalComponent,
    LofaszEditorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LofaszFrontend';

  constructor(
    private realTimeService: LofaszSignalrService,
    private store: Store<AppState>
  ) {
    store.dispatch(LofaszActions.getAllLofasz());
  }
}
