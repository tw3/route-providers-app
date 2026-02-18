import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const acmeAuthGuard: CanMatchFn = () => {
  const router = inject(Router);

  const isAuthenticated = localStorage.getItem('access_token') === 'true';
  console.log('[acmeAuthGuard] isAuthenticated:', isAuthenticated);
  if (isAuthenticated) {
    return true;
  }

  return router.createUrlTree(['/logged-out']);
};
