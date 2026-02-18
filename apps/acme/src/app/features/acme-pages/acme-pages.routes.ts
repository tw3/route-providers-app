import { Routes } from '@angular/router';
import { provideSimplePostAuthService } from '../../services/simple-post-auth.service';

export const acmePostAuthRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./acme-pages.component').then((c) => c.AcmePagesComponent),
    providers: [provideSimplePostAuthService()],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((c) => c.HomePageComponent),
        data: {
          preload: true,
        },
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.routes').then((m) => m.contactUsRoutes),
        data: {
          preload: true,
        },
      },
    ],
  },
];
