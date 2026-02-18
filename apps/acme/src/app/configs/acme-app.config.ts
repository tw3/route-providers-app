import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withExperimentalAutoCleanupInjectors,
  withPreloading,
} from '@angular/router';
import { acmeAppRoutes } from '../routes/acme-app.routes';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

export const acmeAppConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      acmeAppRoutes,
      withExperimentalAutoCleanupInjectors(),
      withPreloading(CustomPreloadingStrategy),
    ),
  ],
};
