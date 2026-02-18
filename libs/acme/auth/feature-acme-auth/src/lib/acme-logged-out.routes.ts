import { Routes } from '@angular/router';
import { AcmeLoggedOutPageComponent } from './acme-logged-out-page.component';

export const acmeLoggedOutRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AcmeLoggedOutPageComponent,
    title: 'Session Ended',
    data: {
      preload: true,
    },
  },
];
