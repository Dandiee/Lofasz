import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { LofaszService } from '../sdk/lofasz/lofasz.service';
import { appEffects, appStore } from '../sdk/store';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LofaszSignalrService } from '../sdk/lofasz/lofasz.signalr.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appStore),
    provideEffects(appEffects),
    LofaszService,
    ReactiveFormsModule,
    LofaszSignalrService,
  ],
};
