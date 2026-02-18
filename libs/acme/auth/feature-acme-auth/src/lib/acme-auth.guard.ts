import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const acmeAuthGuard: CanMatchFn = () => {
  const router = inject(Router);

  if (localStorage.getItem('access_token') === 'true') {
    return true;
  }

  return router.createUrlTree(['/logged-out']);
};
