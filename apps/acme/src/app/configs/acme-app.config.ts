import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withExperimentalAutoCleanupInjectors,
  withPreloading,
} from '@angular/router';
import { acmeAppRoutes } from '../routes/acme-app.routes';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

/**
 * Steps:
 * 1. Launch app:
 *    > npm start
 * 2. Create new browser tab and open Dev Tools > Console
 * 3. Load app in tab: http://localhost:4200/
 *    >> As expected:
 *      - We see this console output:
 *        [acmeAuthGuard] isAuthenticated: false
 *      - The app redirects to http://localhost:4200/logged-out
 * 4. Click the "Login" button and observe console output
 *    >> As expected we see this console output:
 *       [acmeAuthGuard] isAuthenticated: true
 *       [provideSimplePostAuthService] called
 *       [provideSimplePostAuthService] initializer called
 *       [SimplePostAuthService] started at 12:32:04 PM
 *       (5 seconds later)
 *       [provideContactUsService] called
 *       [provideContactUsService] initializer called
 *       [ContactUsService] constructor called
 *       [ContactUsService] started at 12:33:50 PM
 * 5. Click "Logout" button
 *    >> As expected we see this console output:
 *       [ContactUsService] destroyed
 *       [SimplePostAuthService] destroyed
 *    >> Unexpectedly, we also see this console output:
 *       [provideSimplePostAuthService] initializer called
 *       [SimplePostAuthService] started at 12:35:10 PM
 *       [provideContactUsService] initializer called
 *       [ContactUsService] constructor called
 *       [ContactUsService] started at 12:35:10 PM
 *
 * The CustomPreloadingStrategy preloader ignores the canMatch guard and re-triggers
 * the environment initializers under acmePostAuthRoutes
 *
 * If you comment out withPreloading() below the environment initializers are
 * not re-triggered on logout
 */

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
