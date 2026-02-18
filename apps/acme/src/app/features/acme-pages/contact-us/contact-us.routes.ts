import { Routes } from '@angular/router';
import { provideContactUsService } from './contact-us.service';

export const contactUsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./contact-us.component').then((c) => c.ContactUsPageComponent),
    providers: [provideContactUsService()],
  },
];
