import { Route } from '@angular/router';
import { acmeAuthGuard } from '@acme/feature-acme-auth';
import { acmeAuthRoutes } from './acme-auth.routes';

export const acmeAppRoutes: Route[] = [
  ...acmeAuthRoutes,
  {
    path: '',
    canMatch: [acmeAuthGuard],
    loadChildren: () =>
      import('../features/acme-pages/acme-pages.routes').then((m) => m.acmePostAuthRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
