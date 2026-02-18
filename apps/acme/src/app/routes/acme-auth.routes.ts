import { Routes } from '@angular/router';

export const acmeAuthRoutes: Routes = [
  {
    path: 'logged-out',
    loadChildren: () =>
      import('@acme/feature-acme-auth').then((m) => m.acmeLoggedOutRoutes),
    data: {
      preload: true,
    },
  },
];
