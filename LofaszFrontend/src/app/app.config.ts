import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { lofaszReducer } from '../sdk/lofasz/lofasz.reducer';
import { LofaszService } from '../sdk/lofasz/lofasz.service';
import { appEffects, appStore } from '../sdk/store';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideStore(appStore),
    provideEffects(appEffects),
    LofaszService
  ]
};
