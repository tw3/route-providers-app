import { Routes } from '@angular/router';
import { provideSimplePostAuthService } from '../../services/simple-post-auth.service';
import { provideContactUsService } from './contact-us/contact-us.service';

export const acmePostAuthRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./acme-pages.component').then((c) => c.AcmePagesComponent),
    providers: [provideSimplePostAuthService()],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomePageComponent),
        data: {
          preload: true,
        },
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./contact-us/contact-us.component').then((c) => c.ContactUsPageComponent),
        providers: [provideContactUsService()],
        data: {
          preload: true,
        },
      },
    ],
  },
];
