import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acme-logged-out-page',
  template: `
    <h1>Session Ended</h1>
    <p>You have been logged out.</p>
    <button (click)="login()">Login</button>
  `,
})
export class AcmeLoggedOutPageComponent {
  private readonly router = inject(Router);

  login(): void {
    localStorage.setItem('access_token', 'true');
    this.router.navigateByUrl('/home');
  }
}
